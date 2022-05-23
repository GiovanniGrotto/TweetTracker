const app = require('./index.js');
const supertest = request = require('supertest')

const serverUrl = "https://site202139.tw.cs.unibo.it/";

jest.setTimeout(60000);

describe("HASHTAG:", () => {
    test("Response must be 200", async() => {
        const response = await request(app).get('/searchHashtag/covid/mixed/10').send({});
        expect(response.statusCode).toBe(200);
    })
    test("Tweet must be defined", async() => {
        const response = await request(app).get('/searchHashtag/covid/mixed/10').send({})
        expect(response.body.statuses[0]).toBeDefined();
    })
})

describe("KEYWORD:", () => {
    test("Response must be 200", async() => {
        const response = await request(app).get('/searchText/covid/mixed/10').send({});
        expect(response.statusCode).toBe(200)
    })
    test("Tweet must be defined", async() => {
        const response = await request(app).get('/searchText/covid/mixed/10').send({})
        expect(response.body.statuses[0]).toBeDefined();
    })
})

describe("USER:", () => {
    test("Response must be 200", async() => {
        const response = await request(app).get('/searchByUser/trump/mixed/10').send({});
        expect(response.statusCode).toBe(200)
    })
    test("Tweet must be defined", async() => {
        const response = await request(app).get('/searchByUser/trump/mixed/10').send({})
        expect(response.body.data[0]).toBeDefined();
    })
})

describe("GEO:", () => {
    test("Response must be 200", async() => {
        const response = await request(app).get('/searchLocation/bologna/mixed/10/20').send({});
        expect(response.statusCode).toBe(200)
    })
    test("Tweet must be defined", async() => {
        const response = await request(app).get('/searchLocation/bologna/mixed/10/20').send({})
        expect(response.body.statuses[0]).toBeDefined();
    })
    test("Location must not be found", async() => {
        const response = await request(app).get('/searchLocation/asjiashdiasdasjiashdiasd/mixed/10/20').send({});
        expect(response.statusCode).toBe(200)
    })
})

describe("Tweet_by_ID:", () => {
    test("Response must be 200", async() => {
        const response = await request(app).get('/tweetById/1479504517695746050').send({});
        expect(response.statusCode).toBe(200)
    })
})

describe("TRIVIA:", () => {
    test("Response must be 200", async() => {
        const response = await request(app).get('/searchTrivia/creaTrivia/mixed/5').send({});
        expect(response.statusCode).toBe(200)
    })
})

describe("Concorso:", () => {
    test("Response must be 200", async() => {
        const response = await request(app).get('/concorso').send({});
        expect(response.statusCode).toBe(200)
    })
})

describe("TrivaPage:", () => {
    test("Response must be 200", async() => {
        const response = await request(app).get('/trivia').send({});
        expect(response.statusCode).toBe(200)
    })
})

describe("Home:", () => {
    test("Response must be 200", async() => {
        const response = await request(app).get('/home').send({});
        expect(response.statusCode).toBe(200)
    })
})

describe("Team:", () => {
    test("Response must be 200", async() => {
        const response = await request(app).get('/team').send({});
        expect(response.statusCode).toBe(200)
    })
})

describe("TravelSearch:", () => {
    test("Response must be 200", async() => {
        const response = await request(app).get('/travelSply').send({});
        expect(response.statusCode).toBe(200)
    })
})