// import { isOdd } from "./export04.js"; // ES - 확장자 생략 금지
const {isOdd} = await import("./export04.js");

console.log(isOdd(19));