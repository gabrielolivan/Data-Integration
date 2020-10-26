const chai = require('chai')
const expect = chai.expect
const chaihttp = require('chai-http')
const request = require('request')
const server = require('../server')
const Database = require('../db/db')
chai.use(chaihttp)

teste = (name,zip,website,file,url) => {
    before(() => {
        server
    })
    after(() => {
        process.exit()
    })

    describe("Server", () => {
        it(`Entrando na API: "${url}/api/"`, (done) => {
            request(url + '/api/', (error, response, body) => {
                expect(body).to.equal('{"mensagem":"GET dentro da api"}')
                done()
            })
        })

    })

    describe('Método GET', () => {
        it(`Usando método GET da api para procurar pelo NAME "${name}": http://localhost:3000/api/name/${name}`, (done) => {
            request(url + '/api/name/' + name, (error, response, body) => {
                expect(response.statusCode).to.equal(200)
                done()
            })
        })
        it(`Usando método GET da api para procurar pelo ZIP "${zip}": http://localhost:3000/api/zip/${zip}`, (done) => {
            request(url + '/api/zip/' + zip, (error, response, body) => {
                expect(response.statusCode).to.equal(200)
                done()
            })
        })
        it(`Usando método GET da api para procurar pelo NAME "${name}" e ZIP "${zip}": http://localhost:3000/api/search?name=${name}&zip=${zip}`, (done) => {
            request(url + `/api/search?name=${name}&zip=${zip}`, (error, response, body) => {
                expect(response.statusCode).to.equal(200)
                done()
            })
        })
    })
    
    describe("Método POST", () => {
        it(`Usando método POST da api para inserir o arquivo ${file} - esperado o website ${website}`, (done) => {
        
            chai.request(url)
            .post(`/api/update/${file}`)
            .send()
            .end((error, response, body) => {
                expect(response.statusCode).to.equal(201)
            })
        done()
        })
        it(`Usando método GET da api para procurar pelo NAME "${name}" e ZIP "${zip}": http://localhost:3000/api/search?name=${name}&zip=${zip}`, (done) => {
            request(url + `/api/search?name=${name}&zip=${zip}`, (error, response, body) => {
                expect(response.statusCode).to.equal(200)
            })
        done()        
        })
    })
}

setTimeout(() => {
    teste("tola","229","teste.com","teste.csv","http://localhost:3000")
    run()
}, 2000)


