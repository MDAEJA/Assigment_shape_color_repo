let mainContainer = document.getElementById("container");
let mainCircle = document.querySelector(".circle");
console.log(mainCircle);
let buttn1 = document.getElementById("btn1");
let mainShapes = document.querySelector(".shapes");
let buttn2 = document.getElementById("btn2");

// now making button as response
buttn1.addEventListener("click", colorChange);
// now create color function
function CreateColor(){
//  let hexaColor = hexaCode();
//  mainCircle.style.backgroundColor = hexaColor;
};

// function hexaCode(){
// let st = "0123456789abcdef";
// let hexclr = "#";
// for(let i=0; i<6; i++){
//     let indxColr = Math.floor(Math.random() * st.length);
//     hexclr += st[indxColr];
// }
// return hexclr;
// };
// console.log(hexaCode());
 let clrEle = 0;
function colorChange(){
let colorElement = [
    "red",
  "green",
  "cyan",
  "black",
  "voilet",
  "blue",
  "yellow",
  "purple",
  "orange",
  "lightgreen",
  "lemon"
];
// let indx = Math.floor(Math.random() * colorElement.length);
//    return mainCircle.style.backgroundColor = colorElement[indx];
if(clrEle === colorElement.length) clrEle = 0;
return mainCircle.style.backgroundColor = colorElement[clrEle ++];

};
  
let indx = 0;


buttn2.addEventListener("click",changeShapes);


function changeShapes(){
    if(indx > 4) indx = 0;
    indx++;
    if(indx === 1) return mainShapes.className = "triangle";
    else if(indx === 2) return mainShapes.className = "rectangle";
    else if(indx === 3) return mainShapes.className = "circles";
    else if(indx === 4) return mainShapes.className = "diamond"
    
};









