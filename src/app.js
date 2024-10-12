
// ardicilliq
function firstAttempt() {
    let firstAttmp = [1, 2, -6, 0, 9, -16, 44, 99];
    firstAttmp.sort((a, b) => a - b);
    return firstAttmp; 
}
console.log(firstAttempt())

//------------------------------------------------------------------------------------------------------------------
//empty temasi

// let empty = [1, 4, 9];
// empty=[]
// if (empty.length === 0) {
//     console.log(true);
// } else {
//     console.log(false);
// }

function Empty() {
    let empty = [1, 4, 9,"Leyla"];

    if (empty.length == 0) {
        return true; 
    } else {
        return false; 
    }
}
console.log(Empty()); 
//------------------------------------------------------------------------------------------------------------------
// 4 cu increase olan



function increase(num) {
    let son = [];
    for (let i = -2; i < num.length; i++) {
        son.push(i);
    }
    return son;
}


//------------------------------------------------------------------------------------------------------------------

//resetleme


function createCounter(initial) {
    let say = initial; 

    return {
        increment: () => ++say, 
        decrement: () => --say, 
        reset: () => {
            say = initial; 
            return say;
        },
    };
}


