const request = require('supertest')
const app = require('../server.js')
describe('User API', () => {
    it('should show all users', async () => {
        const res = await request(app).get('/api/users')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('users')
        await server.close();
    }),
    it('should show a user', async () => {
        const res = await request(app).get('/api/users/3')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('user')
        await server.close();
    }),
    it('should create a new user', async () => {
        const res = await request(app)
            .post('/api/users')
            .send({
                firstName: 'Bob',
                lastName: 'Doe',
                email: 'bob@doe.com',
                password: '12345678'
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('user')
        await server.close();
    }),
    it('should update a user', async () => {
        const res = await request(app)
            .put('/api/users/3')
            .send({
                firstName: 'Bob',
                lastName: 'Smith',
                email: 'bob@doe.com',
                password: 'abc123'
            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('user')
        await server.close();
    }),
    it('should delete a user', async () => {
        const res = await request(app)
            .del('/api/users/3')
            .send({
                firstName: 'Bob',
                lastName: 'Smith',
                email: 'bob@doe.com',
                password: 'abc123'
            })
        expect(res.statusCode).toEqual(200)
        expect(res.text).toEqual("User deleted")
        await server.close();
    })
})