var chai= require('chai');
var Browser = require('zombie');
var expect = chai.expect;
var app = require('../../app');

var url  =  "http://localhost:3001";

describe("Express/Angular Zombie test", function() {

    before(function(){
        this.browser = new Browser({site:url, debug:false});
        server = app.listen(3002);// listen to new port
     })


     describe("Home Page", function() {
         it ('should show Welcome Message on Home page', function(done){
        var browser = this.browser;
        browser.visit('/');
            browser.wait(function(){
                 expect(browser.text(".home h2")).to.equal('Welcome Home');
             //    console.log('wait done ..')
                done();
            })
        })
     });


     describe("About Page", function() {
       it("should display About ZombieJS Two (2) Contributors", function() {
           var browser = this.browser;
           browser.clickLink(browser.querySelectorAll('a')[2]);
           browser.wait(function(){
               expect(browser.queryAll(".about-contributors li")).to.have.length(2);

               done();
           })

        });
     });


    after(function(){
        server.close()
    })
});
