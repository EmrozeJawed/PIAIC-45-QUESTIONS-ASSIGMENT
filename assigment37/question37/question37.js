"use strict";
function q37() {
    function make_shirt(size = 'large', message = "i love typescript") {
        console.log(`your ordered a ${size}, shirt with the message ${message} printed on it`);
    }
    make_shirt();
    make_shirt('midium');
    make_shirt('large', "i love javacript");
}
q37();
