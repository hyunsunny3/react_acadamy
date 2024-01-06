// import { a, b, add } from "./export05.mjs"; // ES - 확장자 생략 금지
const { a, b, add } = await import("./export05.mjs");

console.log(a,b,add(a,b));