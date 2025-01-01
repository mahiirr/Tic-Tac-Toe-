let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newgame = document.querySelector("#new-game");
let msgcontainer= document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
//palyerO trun 
let trunO=true;

//winning Patterns 
const winpatterns =[
   [0,1,2],
   [3,4,5],
   [6,7,8],
   [0,3,6],
   [1,4,7],
   [2,5,8],
   [0,4,8],
   [2,4,6]   
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
      checkwinner();
   })
});
const showwinner= (winner) =>{
   msg.innerText=`Congratulations, Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
}



const checkwinner = ()=>{
   for(let pattern of winpatterns){
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;
      if(pos1val != "" && pos2val != "" && pos3val != ""){
         if(pos1val === pos2val && pos2val === pos3val ){
            console.log("winner",pos1val);
            showwinner(pos1val);
         }
      }
   }
};
