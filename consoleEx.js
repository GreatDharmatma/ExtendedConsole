(function (console) {
    "use strict";
    var getBox = function (width, height) {
        return {
            string: "+",
            style: "font-size: 1px; padding: " + Math.floor(height / 2) + "px " + Math.floor(width / 2) + "px; line-height: " + height + "px;"
        };
    };
    console.logImage = function (url, scale) {
        if (scale === void 0) { scale = 1; }
        var img = new Image();
        img.onload = function () {
            var dim = getBox(img.width * scale, img.height * scale);
            console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (img.width * scale) + "px " + (img.height * scale) + "px; color: transparent;");
        };
        img.src = url;
    };
    console.logSuccess = function (text, color, background, size) {
        if (color === void 0) { color = 'white'; }
        if (background === void 0) { background = 'green'; }
        if (size === void 0) { size = '20px'; }
        var css = 'color: ' + color + '; background: ' + background + '; font-size: ' + size;
        console.log('%c' + text, css);
    };
    console.logFailure = function (text, color, background, size) {
        if (color === void 0) { color = 'white'; }
        if (background === void 0) { background = 'red'; }
        if (size === void 0) { size = '20px'; }
        var css = 'color: ' + color + '; background: ' + background + '; font-size: ' + size;
        console.error('%c' + text, css);
    };
    console.logWarning = function (text, color, background, size) {
        if (color === void 0) { color = 'white'; }
        if (background === void 0) { background = 'orange'; }
        if (size === void 0) { size = '20px'; }
        var css = 'color: ' + color + '; background: ' + background + '; font-size: ' + size;
        console.warn('%c' + text, css);
    };
    console.logStyled = function (text, color, background, size) {
        if (color === void 0) { color = 'black'; }
        if (background === void 0) { background = 'white'; }
        if (size === void 0) { size = '20px'; }
        var css = 'color: ' + color + '; background: ' + background + '; font-size: ' + size;
        console.log('%c' + text, css);
    };
})(console);
