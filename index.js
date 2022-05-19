
function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return returnsANamedFunction;
};

function returnsAnAnonymousFunction() {
    return function () {
        console.log("This is great!");
    };
}

