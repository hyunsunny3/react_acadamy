// import { a, b, add } from "./export05.js"; // ES - 확장자 생략 금지
const { a, b, add } = await import("./export05.js");

console.log(a,b,add(a,b));