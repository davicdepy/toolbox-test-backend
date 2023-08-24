const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../server");
const { handleFileFormat } = require("../utils/handleFormat");

const should = chai.should();
const expect = chai.expect;
const value =
'file,text,number,hex\ntest9.csv,CaCkc\ntest9.csv,MmXjpsMqxOGsAOXoM,0,f3a1ef39c9d519f8ba6dcfe8ceb9c31e\ntest9.csv,nrAYhWycSNcMdCyiLgmtiut,34,00ec5e4882c71481aad5152aa7fd8809\ntest9.csv,pNCN,192,5f3c8b6d6102dc39b201ee59d7b87b16\ntest9.csv,g,36760486,c0e591dc5c3695a129f702f9aa523ff1\ntest9.csv,xrDj,97,2d3c89b31444a33d3ff0c1a49870a76e\ntest9.csv,VwsMMItPjkEoBUDwRRytsjjy,267327,47a7666712b78de6913779d5a64fa2a4\ntest9.csv,lHvTQgZZ,297284886,3fd989f7feeab0d891e387e4ca6b17f5\ntest9.csv,IBalPzXULcPJIRPyFxIpAsaNQS,6,91a659c8fc5c971abb06c0fcdf6fe71e,,\ntest9.csv,inCRa\ntest9.csv,EtjhsLiEljnzgOJYvuxF,1440235,7691b70dad5620686df048b1284bf799\ntest9.csv,yksveukz,50,03bcc15d688cb84fdbbf70beef29b9b4\ntest9.csv,EvScFYCkSXYrSvTZMFjx,819575619,1622722d3089be53775a022d0b901232\ntest9.csv,hIEsNSxQqbeeQiLNFPyvD,877678586,1f51d43d94c8e14235a028f42cff50bf';
chai.use(chaiHttp);

describe('Data test', function() {

  it.only('Get file list', function(done) {
    chai.request(server)
      .get("/files/data")
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a("array");
        done();
      });
  });

  it.only('Get file data', function(done) {
    chai.request(server)
      .get("/files/data/test2.csv")
      .end(function(err, res){
        res.should.have.status(200);
        res.body.should.be.a("object");
        done();
      });
  });

  it.only('Format the data', function(done) {
    expect(handleFileFormat(value)).to.be.an('array');
    done();
  });
});