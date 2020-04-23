const request = require('supertest');

const server = require('./server.js')

describe('server', function(){
    describe('GET /', function(){
        it("should return 200 ok", function(){
            //make a GET request to /endpoint on the server
            return request(server) //return the async call to let jest know it should wait
              .get("/")
              .then(res => {
                  //assert that the http status code is 200
                  expect(res.status).toBe(200)
              })
        })
    })

    describe("POST /hobbits", function(){
        it.todo("return 201 on success")
        it.todo("add a hobbit to the db")
        it.todo("should return a message saying Hobits created successfully")
    })
})