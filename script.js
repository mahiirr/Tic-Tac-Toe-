let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");

//palyerO trun 
let trunO=true;

//winning Patterns 
const winpatterns =[
   ["0,1,2"],
   ["3,4,5"],
   ["6,7,8"],
   ["0,3,6"],
   ["1,4,7"],
   ["2,5,8"],
   ["0,4,8"],
   ["2,4,6"]   
]

boxes.forEach((box)=>{
   box.addEventListener("click",(evnt)=>{
      console.log("button was clicked");
      if(trunO){
         box.innerText="O";
         trunO=false;
      }else{
         box.innerText="X";
         trunO=true;
      }
      box.disabled= true;
   })
});


