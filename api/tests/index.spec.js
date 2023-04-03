const { expect } = require("chai");
const request = require("supertest");
const server = require("../src/app");

describe("GET /api/items", () => {
  it("should respond with status 400 if no query parameter is provided", async () => {
    const response = await request(server).get("/api/items");
    expect(response.status).to.be.equal(400);
  });

  it("should respond with status 200 and a valid response body if query parameter is provided", async () => {
    const response = await request(server).get("/api/items?q=iphone");
    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.property("author");
    expect(response.body).to.have.property("categories");
    expect(response.body).to.have.property("items");
  });
});

describe("GET /api/items/:id", () => {
  it("should respond with status 200 and a valid response body if item exists", async () => {
    const response = await request(server).get("/api/items/MLA909922852");
    expect(response.status).to.be.equal(200);
    expect(response.body).to.have.property("author");
    expect(response.body).to.have.property("item");
    expect(response.body.item).to.have.property("id");
    expect(response.body.item).to.have.property("title");
    expect(response.body.item).to.have.property("price");
    expect(response.body.item).to.have.property("picture");
    expect(response.body.item).to.have.property("condition");
    expect(response.body.item).to.have.property("free_shipping");
    expect(response.body.item).to.have.property("sold_quantity");
    expect(response.body.item).to.have.property("description");
  });

  it("should respond with status 500 if an error occurs while getting data", async () => {
    const response = await request(server).get("/api/items/invalidid");
    expect(response.status).to.be.equal(500);
  });
});
