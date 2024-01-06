// import { isOdd } from "./export04.mjs"; // ES - 확장자 생략 금지
const {isOdd} = await import("./export04.mjs");

console.log(isOdd(19));