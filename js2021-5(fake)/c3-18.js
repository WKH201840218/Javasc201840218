const { callbackify } = require('node:util');
const repl = require('repl');

repl.start({
    prompt: "숫자 입력> ",
    eval: (command, context, filename, caooback) => {
        let number = Number(command); 
        if (isNaN(numer)){
            console.log("숫자가 아닙니다.");
        } else {
            console.log("숫자입니다.");
        }
        callbackify();
    }
})