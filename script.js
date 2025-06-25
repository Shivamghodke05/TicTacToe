let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newgame = document.querySelector(".newgame");
let winblock = document.querySelector(".winblock");
let msg = document.querySelector(".win")

let turn0 = true;
let count=0;

let winpatterns = [ 
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],    
];


const resetgame = () => {
    turn0=true;
    count=0;
    enableBoxes();
    winblock.classList.add("hide");
};

const enableBoxes=()=> {
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congrats,Winner is ${winner}`;
    winblock.classList.remove("hide");
    disableboxes();
};

const gamedraw =() => {
    msg.innerText = 'Game was a Draw.' ;
    winblock.classList.remove("hide");
    disableboxes();
};

boxes.forEach((box)=> {
    box.addEventListener("click", ()=>{
        console.log("the box is clicked");
        if(turn0){
            box.innerText = "O";
            turn0 = false;

        }else{
            box.innerText = "X";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let iswinner = checkwinner();
        if (count === 9 && !iswinner){
            gamedraw();
        }

    });
});

const checkwinner = () => {
    for (let pattern of winpatterns){
        
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val!="" && pos2val!="" && pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                showwinner(pos1val);
                disableboxes();
               return true;
            }
        }
    }
};
newgame.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);

