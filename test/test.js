var jsdom = require('mocha-jsdom')
var expect = require('chai').expect
var  fs =require('fs')

jsdom({
    src: fs.readFileSync('./dist/JSLite.js', 'utf-8')
})

describe('DOM Insertion, Inside', function () {

    it('html()', function () {
        document.body.innerHTML = '<div class="third">Goodbye</div>'
        expect($("div.third").html()).eql('Goodbye');
    })
    it('html("string !!")', function () {
        document.body.innerHTML = '<div class="third">Goodbye</div>'
        expect($("div.third").html("string !!").html()).eql("string !!");
    })

})