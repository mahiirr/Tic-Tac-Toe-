let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");   
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

//resetfunction
const resetgame= () =>{
    trunO=true;
    enabledboxes();
    msgcontainer.classList.add("hide");
    
}

//Each players truns function
boxes.forEach((box)=>{
   box.addEventListener("click",()=>{
      if(trunO){
         //playerO
         box.innerText="O";
         box.style.color="red";
         trunO=false;
      }else{
         //playerX
         box.innerText="X";
         box.style.color="Blue";
         trunO=true;
      }
      box.disabled= true;
      checkwinner();
   })
});

//if game was finish then disabledboxes input
const disabledboxes= () =>
   {
   for(let box of boxes){
      box.disabled =true;
   }
}
 
//if they reset or start new then Enableboxes again
const enabledboxes= () =>{
   for(let box of boxes){
      box.disabled=false;
      box.innerText="";
   }
}

//printing msg for Winner
const showwinner= (winner) =>{
   msg.innerText=`Congratulations, Winner is ${winner}`;
   msgcontainer.classList.remove("hide");
   disabledboxes();
}

//funtion of checking winner 
const checkwinner = ()=>{
   for(let pattern of winpatterns){
      let pos1val = boxes[pattern[0]].innerText;
      let pos2val = boxes[pattern[1]].innerText;
      let pos3val = boxes[pattern[2]].innerText;
      if(pos1val != "" && pos2val != "" && pos3val != ""){
         if(pos1val === pos2val && pos2val === pos3val ){
            showwinner(pos1val);
            return;
         }
      }
   }
   checkdraw();
};

const checkdraw =( ) =>{
   let allfilled = Array.from(boxes).every((box) => box.innerText !=="");
   if(allfilled){
      msg.innerText="It's Draw!"
      msgcontainer.classList.remove("hide");
      disabledboxes();
   }
}

//reset and new game button event
newgame.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
