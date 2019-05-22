var assert = require("assert");
let chai = require("chai");
let chaiHttp = require("chai-http");
let server=require("../app");
let should = chai.should();



chai.use(chaiHttp);
describe("API", function(){
    describe ("/GET ALL", function(){
        it("should not have permission", done => {
            chai.request(server)
                .get("/api/throws/")
                .end((err,res) => {
                    res.should.have.status(401);
                    done()
                });
        });
    });

    describe ("/POST login", function(){
        it("should login", done => {
            chai.request(server)
                .get("/api/throws/")
                .end((err,res) => {
                    res.should.have.status(401);
                    done()
                });
        });
    });
});
