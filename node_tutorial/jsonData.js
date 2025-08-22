//JSON Data to Object 


const jsonString='{"name":"Sunil","age":30,"city":"New York"}';
const jsonObject=JSON.parse(jsonString);
console.log(jsonObject.name,jsonObject.age,jsonObject.city);


// Object data to JSON Data

const objectToConvert={
    name:"Sunil",
    age:25
};

const json=JSON.stringify(objectToConvert);
console.log(json);
console.log(typeof json)


