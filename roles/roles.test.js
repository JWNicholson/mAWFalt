const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

describe('roles', () => {
    describe('environment', () => {
        it('should return status 200 OK', async () => {
            const res = await request(server).get('/api/roles')

            expect(res.status).toBe(200);
        })

    })

    it('/roles returns roles list', async () => {
        const resp = await request(server)
         .get('/api/roles')
    
         expect(resp.body).toHaveLength(2);
     })
});