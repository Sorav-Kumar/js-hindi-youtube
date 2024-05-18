// // singleton
// // Object.create

// // object literals

mySym=Symbol("key1")

const JsUser=
{
    fname:"Sorav",
    lname:"Kumar",
    "full name":"Sorav Kumar",
    age:20,
    [mySym]:"key2",
    loaction:"Jaipur",
    email:"soravrajput@gmail.com",
    lastLoginPAge:["Monday","Tuesday"]
}
// console.log(JsUser.fname);
// // console.log(JsUser["email"]);
// // console.log(JsUser["full name"]);
// // console.log(JsUser[mySym]);
// // console.log(typeof(JsUser.mySym));
// JsUser.fname="sapna";
// console.log(JsUser.fname);
// Object.freeze(JsUser);
// JsUser.fname="kumari";
// console.log(JsUser.fname);
// console.log(JsUser);

JsUser.greeting=function()
{
    console.log("hello JS user");
}
JsUser.greetingTwo=function()
{
    console.log(`hello JS user, ${this["full name"]}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());