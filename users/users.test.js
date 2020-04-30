const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

describe('login', () => {
   it ('returns 200', async () => {
       let res = await request(server)
       .post('/api/users/login')
       .send({username: 'bobupndown', password: 'password1'})

       expect(res.status).toBe(200);

       expect(res.body.message).toBe('login successful');
       
   })

   it('/users returns 200', async () => {
      const res = await request(server)
       .get('/api/users')

       expect(res.status).toBe(200);
    
       expect(res.body).toHaveLength(4);
   })

   it('/users returns user list', async () => {
    const resp = await request(server)
     .get('/api/users')

     expect(resp.body).toHaveLength(4);
 })


});


