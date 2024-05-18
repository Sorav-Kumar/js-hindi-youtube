// // object literals
// const tinderUser={}

const tinderUser= new Object();
tinderUser.id="12346sabc";
tinderUser.name="sorav";
tinderUser.isLoggedIn=false;

// // console.log(tinderUser);
// const regularUser={
//     email:"Some2gagjg",
//     fullName:{
//         userName:{
//         fname:"Sorav",
//         lname:"Kumar"
//         }
//     }
// }

// console.log(regularUser);
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userName);
// console.log(regularUser.fullName.userName.fname);

// const obj1={1:"a",2:"b"};
// const obj2={3:"c",4:"d"};
// const obj= Object.assign({},obj1,obj2); //this is older method
// const obj={...obj1,...obj2}; // this is leatedt method
// console.log(obj);

const user=[
    {
        email:"sorav",
        name:"kumar",
        age:"25"
    },
    {
        email:"sorav1",
        name:"kumar1",
        age:"251"
    },
    {
        email:"sorav2",
        name:"kumar2",
        age:"252"
    },
    {
        email:"sorav3",
        name:"kumar3",
        age:"253"
    }
]

// console.log(user);

user[1].email
console.log(tinderUser.hasOwnProperty("name"));
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));
