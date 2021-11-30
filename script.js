function callTen(callback) {
    setTimeout(() => {
        console.log("10");
        callback();
    }, 1000);

}

function callNine(callback) {
    setTimeout(() => {
        console.log("9");
        callback();
    }, 1000);
}

function callEight(callback) {
    setTimeout(() => {
        console.log("8");
        callback();
    }, 1000);
}

function callSeven(callback) {
    setTimeout(() => {
        console.log("7");
        callback();
    }, 1000);
}

function callSix(callback) {
    setTimeout(() => {
        console.log("6");
        callback();
    }, 1000);
}

function callFive(callback) {
    setTimeout(() => {
        console.log("5");
        callback();
    }, 1000);
}

function callFour(callback) {
    setTimeout(() => {
        console.log("4");
        callback();
    }, 1000);
}

function callThree(callback) {
    setTimeout(() => {
        console.log("3");
        callback();
    }, 1000);
}

function callTwo(callback) {
    setTimeout(() => {
        console.log("2");
        callback();
    }, 1000);
}

function callOne(callback) {
    setTimeout(() => {
        console.log("1");
        callback();
    }, 1000);
}


callTen(() => {
    callNine(() => {
        callEight(() => {
            callSeven(() => {
                callSix(() => {
                    callFive(() => {
                        callFour(() => {
                            callThree(() => {
                                callTwo(() => {
                                    callOne(() => {
                                        setTimeout(() => {
                                            console.log("Happy Independence Day")

                                        },1000)
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})