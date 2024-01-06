// 모듈 1개 내보내기 : module.exports
// module.exports에 객체(데이터형)로 담아 내보내기 - 객체 : {}

/*
    [] - 배열 : 값만 여러개
    {} - 객체 : '속성:값'이 여러개

    function isOdd(val){
        let rtn = (val % 2) ? true:false
        return rtn
    }

    두개 이상의 값을 return하려면 - return {a,b}
*/

function isOdd(val){
    // 홀짝 구분 함수
    return (val % 2) ? true:false
}

module.exports = {
    isOdd
}

/*
    여러개 내보내기
    exports.isOdd = function (){

    }
*/