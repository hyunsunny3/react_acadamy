// ES - 모듈 여러개 내보내기

/*

export let a = 1;
export let b = 2;

export function add(c,d){
    return c + d;
}

of

let a = 1;
let b = 2;

function add(c,d){
    return c + d;
}

export {a,b,add}

*/

let a = 1;
let b = 2;

function add(c,d){
    return c + d;
}

export {a,b,add}