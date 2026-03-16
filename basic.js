// let Name="Bahu"
// let age=16
// console.log(`My name is ${Name} and Iam ${age} year old.`)
// console.log("THis is Templet literals")
// console.log(typeof(false))
// console.log('A'>'a')
// console.log(true && false)
// console.log(true && true)
// console.log(true || false)
// console.log(true || true)
// console.log(true != false)
// console.log(true != true)

// // let color=prompt("ENter a Color name");
// let color="green"
// switch(color){
//     case "red":console.log("Stop");
//     break;
//     case "yellow":console.log("Hang Tight");
//     break;
//     case "green":console.log("GOo!!");
//     break;
//     default:console.log("The LIght is Broken")
// };

// // alert("ERRORr");
// console.error("This is Wrong");
// console.warn("SomeThing Went Wrong!!")
// console.log(Name.toUpperCase())
// console.log(Name.toLocaleLowerCase())

// let li=[1,2,3,4,4]
// console.log([...new Set(li)]);

// let txt=[1,2,3,4]
// console.log(txt.reverse())
// let st="Python"
// let revArr=''
// for(char of st){
//     revArr=char+revArr
// }
// console.log(revArr)
// for(let i=0;i<=10;i++){
//     console.log(i)
// }
// let i=1
// while(i<=10){
//     console.log(`2 X ${i} = ${i*2} `);
//     i++;
//     if(i===9){
//         break;
//     }
    
// }

// let data={
//     name:'Aman',
//     age:19,
//     edu:13,
//     place:"bang"
// }
// console.log(data['name'])
// console.log(data["age"])
// console.log(Math.floor(Math.random()*10)+1)


// // USE of THIS key Worddd!!
// let birth={
//     name:'Aman',
//     bYear:2006,
//     pYear:2026,
//     age(){return `${this.name}, Your ${this.pYear-this.bYear} Old`}
// }
// birth.age()
// console.log(birth.age())



// function greet(fun,count){
//     for(let i=1;i<=count;i++){
//         fun();
//     }
// }
// let per=function(){
//     console.log("Hello")
// }
// greet(per,100)

// let calculator={
//     add(a,b){console.log(a+b)},
//     sub(a,b){console.log(a-b)},
//     mul(a,b){console.log(a*b)},
//     div(a,b){console.log(a/b)},
//     pow(a,b){console.log(a**b)},
// }
// calculator.add(2,3)
// calculator.sub(2,3)
// calculator.mul(2,3)
// calculator.pow(2,3) 


// // This key WOrd  for Constructor 
// function Car(name){
//     this.name=name;
//     this.start= function(){
//         console.log(this.name + '  Started')
//         console.log(this)
//     }
// }
// let swift= new Car('Swift');
// swift.start()
// // console.log(swift)
// console.log(this)


// // practice problem
// let squ={
//     side:10,
//     get area(){return this.side*this.side}
//     // get syntax binds object properties to a function
//     // means function in objet gets properties of object..
// }
// squ.side=5
// console.log(squ.area)

// function stringConcat(sy,a,b,c){
//     return a+sy+b+sy+c
//     // To concatinate any array we use .join('-') function
// }
// console.log(stringConcat('-','aman','36','yt'))
// let a=['abc','def','hijk']
// console.log(a.join('_'))




// try{
//     console.log("Hello")
//     console.log("Hello")
//     console.log("Hello")

//     console.log("Hello");
//     console.log(adsff);
//     console.log("Hello");

//     console.log("Hello");
//     console.log("Hello")
// }catch{
//     console.log("SomeThing Went wrongg")
// }

// let s=(a,b)=>{return a+b}

// // setTimeout(() => {
// //     console.log('Apna coding')
// // },1000);


// // setInterval(() => {
// //     console.log('BHAuu')
// // }, 2000);

// let A=['afas','awrqw','qwerfg']
// let b=['bgfn','nyhny','gh']
// let c= [...A,...b]
// console.log(c)
// console.log(A.concat(b))

// let Names=['Aman',"Abdul","Akbar",'Babar']
// for(name of Names){
//     console.log(name)
// }

// Names.forEach((n,i)=>{
//     console.log(`${i+1} : ${n}`)

// });


// console.log(Names.find(name =>name.length>4))


// let lName=Names.filter(name => name.length>=5);
// console.log(lName)

// let n=[1,2,3,4,5,6,7,8,9,10];
// let max=n.reduce((re,el)=>{
//     return el+re
// });
// console.log(max)

// Start
let container=document.querySelector('.container');
let toggle=document.querySelector('.toggle');

toggle.addEventListener('click',()=>{
    if(toggle.innerText==="OFF"){
        toggle.classList.add("move-toggle");
        toggle.innerText="ON";
        container.style.backgroundColor='rgb(202, 203, 143)'
    }
    else{
        
        toggle.classList.remove("move-toggle");
        toggle.innerText="OFF";
        container.style.backgroundColor='rgba(0,0,0,0.8)'
    }
});

// ENddddd

// console.dir(document.documentElement);
// console.dir(document.body);
// console.dir(document.head);


// // let btn=document.querySelector('.btn');
// // let para=document.querySelector('.para');
// // let h1=document.querySelector('.h1');
// // let h3=document.querySelector('.h3');

// // function backgroundColor(){
// //     console.log(this.innerText);
// //     this.style.backgroundColor="pink"
// // }
// // btn.addEventListener('click',backgroundColor);
// // para.addEventListener('click',backgroundColor);
// // h1.addEventListener('click',backgroundColor);
// // h3.addEventListener('click',backgroundColor);



// // let form=document.querySelector('form');

// // form.addEventListener('submit',(event)=>{
// //     console.dir(form);
// //     console.dir(event);
// //     event.preventDefault();
// //     alert("Form is Submitted");
// // });

// // let lists=document.querySelector('.lists');
// // let ul=document.querySelector('ul');
// // let lis=document.querySelectorAll('li');
// // lists.addEventListener('click',function(event){
// //     console.log("div Clicked!!");
// // });
// // ul.addEventListener('click',function(event){
// //     event.stopPropagation();
// //     console.log("Ul clicked");
// // });
// // for(li of lis){
// //     li.addEventListener('click',function(event){
// //         event.stopPropagation();
// //         console.log("li Clicked");
// //     });
// // }


// let add=document.querySelector(".add");
// let input=document.querySelector(".task");
// let ul=document.querySelector('ul');

// add.addEventListener('click',function(){
//     let items=document.createElement("li");
//     items.innerText=input.value;
//     let delbtn=document.createElement("button");
//     delbtn.innerText="Remove"
//     delbtn.classList.add("del");
//     items.appendChild(delbtn);
//     ul.appendChild(items);
//     input.value="";
// });

// ul.addEventListener('click',function(event){
//     if(event.target.nodeName=="BUTTON"){
//         let liParent=event.target.parentElement;
//         liParent.remove();
//     }
// });

// // SIMPLE CALL BACK FUNCTION SYNCRONITY NATURE
// function aman(){
//     console.log("IAM First");
// }
// function bhau(){
//     console.log("I am SECond");
// }
// function bhai(){
//     console.log("Iam 3rdd!!");
// }
// aman();
// bhau();
// bhai();
// console.log("Rank Task ENd");

// // ASYNCONITY NATURE OF JSSS!!
// function Hog(callback){
//     setTimeout(()=>{
//         console.log("DOG Start Walking 1");
//         callback();
//     },1000);
// }
// function hoginRoom(callback){
//     setTimeout(()=>{
//         console.log("Dog Entered ROom 2")
//         callback();
//     },1000);
// }
// function hogRun(callback){
//     setTimeout(()=>{
//         console.log("Dog RannEd!! 3");
//         callback();
//     },1400);
// }
// // Below callback is CalL BAck HEll which is difficult to read and debug
// // To Avoid callback hell we use Promises ,asyc and await keywords 
// Hog(()=>{
//     hoginRoom(()=>{
//         hogRun(()=>{
//             console.log("End Of DOg");
//         });
//     });
// });

// // PRomises--An obbject that manages Asynchronous operation
// // new Promise((resolve,reject)=>{async codee})

// function Dog(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("DOG Start Walking 1");
//         },1000);
//     })
// }
// function doginRoom(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Dog Entered ROom 2")
//         },1000);
//     })
// }
// function dogRun(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Dog RannEd!! 3");
//         },1400);
//     })
// }
// Dog()
// .then((value)=>{console.log(value);
//     return doginRoom();
// })
// .then((value)=>{console.log(value);
//     return dogRun();
// })
// .then((value)=>{
//     console.log(value);
//     console.log("DOgesh Endd!");
// })
// .catch((e)=>console.log(e))


// // Async keyword--whcih convert a noraml function into async function
// // and returns a Promise

// async function as(){
//     return "hello"
// }

// async function na(){
//     throw "Bhau"
// }

// async function gret(){
//     return "HELLO"
// }
// // greet()
// // .then((result)=>{
// //     console.log(`YOur result is ${result}`);
// // })
// // .catch((err)=>{
// //     console.log(err);
// // });
// async function g(){
// try {
//      let a= await as();
//     console.log(a)
//     let b= await na();
//     console.log(b)
//     let c= await gret();
//     console.log(c)
//     console.log("DOne!!!")
// } catch (error) {
//     console.log(error)
// }
// }
// g();


// function Pog(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("DOG Start Walking 1");
//         },5000);
//     })
// }
// function poginRoom(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Dog Entered ROom 2")
//         },5000);
//     })
// }
// function pogRun(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Dog ");
//         },5000);
//     })
// }

// async function demo(){
//     let a= await Pog();
//     console.log(a);
//     let b= await poginRoom();
//     console.log(b);
//     let c= await pogRun();
//     console.log(c)
//     console.log("DOne")
// }
// demo();