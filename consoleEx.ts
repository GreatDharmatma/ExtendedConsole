(function(console: any){
    "use strict";
    type Box = { string: string, style: string };
    const getBox = (width: number, height: number): Box => {
        return {
            string: "+",
            style: "font-size: 1px; padding: " + Math.floor(height/2) + "px " + Math.floor(width/2) + "px; line-height: " + height + "px;"
        }
    };
    console.logImage = (url: string, scale: number = 1): void => {
        var img = new Image();
        img.onload = () => {
            var dim = getBox(this.width * scale, this.height * scale);
            console.log("%c" + dim.string, dim.style + "background: url(" + url + "); background-size: " + (this.width * scale) + "px " + (this.height * scale) + "px; color: transparent;");
        };
        img.src = url;
    };
    console.logSuccess = (text: string, color: string = 'white', background: string = 'green', size: string = '20px'): void => {
        const css = 'color: ' + color + '; background: ' + background + '; font-size: ' + size;
        console.log('%c'+text, css);
    };
    console.logFailure = (text: string, color: string = 'white', background: string = 'red', size: string = '20px'): void => {
        const css = 'color: ' + color + '; background: ' + background + '; font-size: ' + size;
        console.error('%c'+text, css);
    };
    console.logWarning = (text: string, color: string = 'white', background: string = 'orange', size: string = '20px'): void => {
        const css = 'color: ' + color + '; background: ' + background + '; font-size: ' + size;
        console.warn('%c'+text, css);
    };
    console.logStyled = (text: string, color: string = 'black', background: string = 'white', size: string = '20px'): void => {
        const css = 'color: ' + color + '; background: ' + background + '; font-size: ' + size;
        console.log('%c'+text, css);
    }
})(console);
