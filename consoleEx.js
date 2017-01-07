(function(console){
    "use strict";
    function getBox(width, height) {
        return {
            string: "+",
            style: "font-size: 1px; padding: " + Math.floor(height/2) + "px " + Math.floor(width/2) + "px; line-height: " + height + "px;"
        }
    };
    console.logImage = function(url, scale) {
        scale = scale || 1;
        var img = new Image();

        img.onload = function() {
            var dim = getBox(this.width * scale, this.height * scale);
            console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; color: transparent;");
        };

        img.src = url;
    };
    console.logSuccess = function(text) {
        const css = 'background: green; color: white; display: block; font-size: 16px';
        console.log('%c'+text, css);
    };
    console.logFailure = function(text) {
        const css = 'background: red; color: white; display: block; font-size: 16px';
        console.log('%c'+text, css);
    };
    console.logWarning = function(text) {
        const css = 'background: orange; color: white; display: block; font-size: 16px';
        console.log('%c'+text, css);
    };
})(console);

console.logImage('https://i.cloudup.com/Zqeq2GhGjt-3000x3000.jpeg');
console.logSuccess('Success');
console.logFailure('Failure');
console.logWarning('Warning');
