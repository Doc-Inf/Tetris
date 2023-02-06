import { BLOCCO_WIDTH, Blocco, FormaElle } from "./blocchi.js";

const centerX = (self.innerWidth / 2 );
const maxWidth = self.innerWidth;
const maxHeight = self.innerHeight;
const contenitore = document.getElementById("contenitore");
const blocco = document.getElementById("blocco");
const forme = [];
const divs = [];
let y = 0;
addEventListener("keydown",(event)=>{
    if(event.key=="Enter"){
        forme[forme.length-1].rotate();
        resetDivPosition();
    }
    if(event.key=="ArrowLeft"){
        forme[forme.length-1].velX = -5;
    }  
    if(event.key=="ArrowRight"){
        forme[forme.length-1].velX = 5;
    }    
});

forme.push( new FormaElle("o",(centerX-(BLOCCO_WIDTH*2)),0,"red",0) );
creaBlocchi();

setInterval(muoviBlocchi,1);

function creaBlocchi(){
    for(let i=0;i<forme.length;++i){
        for(let j=0;j<forme[i].blocchi.length;++j){
            let div = document.createElement("div");
            let n = forme[i].numeroBloccoIniziale+j;
            div.id="div"+n;
            div.style.position = "absolute";
            div.style.top = forme[i].blocchi[j].y + "px";
            div.style.left = forme[i].blocchi[j].x + "px";
            div.style.backgroundColor = forme[i].blocchi[j].colore;
            div.style.border = "3px ridge black";
            div.style.width = forme[i].blocchi[j].width+"px";
            div.style.height = forme[i].blocchi[j].height+"px";
            contenitore.appendChild(div);
            /*
            console.log("Blocco " + div.id + "\n");
            console.log("Blocco Position: " + div.style.position + "\n");
            console.log("Blocco Top: " + div.style.top + "\n");
            console.log("Blocco Left: " + div.style.left + "\n");
            console.log("Blocco Width: " + div.style.width + "\n");*/
        }
    }
}

function muoviBlocchi(){
    for(let i=0;i<forme.length;++i){
        for(let j=0;j<forme[i].blocchi.length;++j){
            let div = document.getElementById("div"+forme[i].blocchi[j].numero);
            /*
            console.log("Blocco " + div.id + "\n");
            console.log("Blocco Position: " + div.style.position + "\n");
            console.log("Blocco Top: " + div.style.top + "\n");
            console.log("Blocco Left: " + div.style.left + "\n");
            console.log("Blocco Color: " + div.style.backgroundColor + "\n");
            console.log("Blocco Width: " + div.style.width + "\n");
            console.log("Blocco Height: " + div.style.height + "\n");*/

            // MOVIMENTO VERTICALE
            if(forme[i].velY!=0){
                if( (forme[i].blocchi[j].y + forme[i].blocchi[j].height + 3 + forme[i].velY) < maxHeight){
                    forme[i].blocchi[j].y = forme[i].blocchi[j].y + forme[i].velY; 
                    div.style.top = forme[i].blocchi[j].y + "px";                
                }else{
                    forme[i].velY = 0;                
                }
            }
            
            // MOVIMENTO ORIZZONTALE
            if(forme[i].velX!=0 && forme[i].velY!=0){
                if( ((forme[i].blocchi[j].x + forme[i].blocchi[j].width + 3 + forme[i].velX) < maxWidth) && ( (forme[i].blocchi[j].x + forme[i].velX) > 0)){
                    forme[i].blocchi[j].x = forme[i].blocchi[j].x + forme[i].velX; 
                    div.style.left = forme[i].blocchi[j].x + "px";                
                }else{
                    forme[i].velX = 0;                
                }
            }     
        }
        forme[i].velX = 0 + "px";
    }    
}



function resetDivPosition(){
    for(let j=0;j<forme[forme.length-1].blocchi.length;++j){
        let div = document.getElementById("div"+forme[0].blocchi[j].numero);
        div.style.top = forme[forme.length-1].blocchi[j].y + "px";
        div.style.left = forme[forme.length-1].blocchi[j].x + "px";
    }    
}