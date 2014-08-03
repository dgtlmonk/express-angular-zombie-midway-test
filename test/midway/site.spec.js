var chai= require('chai');
var Browser = require('zombie');
var expect = chai.expect;
var app = require('../../app');

var url  =  "http://localhost:3001";

describe("Express/Angular Zombie test", function() {

    before(function(){
        this.browser = new Browser({site:url, debug:false});
        server = app.listen(3002);// listen to new test port
     })


     describe("Home Page", function() {
         it ('should show Welcome Message on Home page', function(done){
        var browser = this.browser;
        browser.visit('/');
            browser.wait(function(){
                 expect(browser.text(".home h2")).to.equal('Welcome Home');
                done();
            })
        } )
     });


     describe("About Page", function() {
       it("should display About ZombieJS Two (2) Contributors", function(done) {
           var browser = this.browser;
           browser.clickLink(browser.querySelectorAll('a')[2]);
           browser.wait(function(){
               expect(browser.queryAll(".about-contributors li")).to.have.length(2);
               done();
           })

        });
     });

     describe("Login Page", function() {
       it("should display Login Form", function(done) {
        var browser = this.browser;
            browser.clickLink(browser.querySelectorAll('a')[1]);
            browser.wait(function () {
                 expect(browser.queryAll("form")).to.have.length(1);

                done();
            })
        });

        it("should display error message if username and password is wrong", function(done){
            var browser = this.browser;
            browser.fill("Username","Jake").fill("Password","Weary"); // fill-in the fields
            browser.pressButton(browser.button(".login-submit"));
            expect(browser.text("span")).to.equal("Invalid username or password. Please try again.")
            done();
        });

        it("should display success message if username and password is correct", function(done){
            var browser = this.browser;
            browser.fill("Username","test").fill("Password","test"); // fill-in the fields
            browser.pressButton(browser.button(".login-submit"));
            expect(browser.text("span")).to.equal("Welcome Back User!")
            done();
        });

     });


    after(function(){
        server.close()
    })
});
