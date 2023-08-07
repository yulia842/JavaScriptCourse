const yuliaHeight = 1.67;
const yuliaWeight = 50;

const timHeight = 1.78;
const timWeight = 93;

let yuliaBMI = yuliaWeight / yuliaHeight ** 2;
let timBMI = timWeight / timHeight ** 2;

let timHigherBMI = yuliaBMI < timBMI

console.log(yuliaBMI, timBMI, timHigherBMI)