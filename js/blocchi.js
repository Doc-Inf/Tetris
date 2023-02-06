export const BLOCCO_WIDTH = 50;
export function Blocco(numero,x,y,colore){
    this.numero = numero;
    this.x = x;
    this.y = y;
    this.colore = colore;
    this.width = BLOCCO_WIDTH;
    this.height = BLOCCO_WIDTH;
}
export function FormaElle(orientamento,x,y,colore,numeroBloccoIniziale){
    this.blocchi = []; 
    this.numeroBloccoIniziale = numeroBloccoIniziale;   
    this.velX = 0;
    this.velY = 1;
    if(orientamento=="o"){
        this.blocchi.push(new Blocco(numeroBloccoIniziale,x,y,colore));
        this.blocchi.push(new Blocco(numeroBloccoIniziale+1,x+BLOCCO_WIDTH,y,colore));
        this.blocchi.push(new Blocco(numeroBloccoIniziale+2,x+(BLOCCO_WIDTH*2),y,colore));
        this.blocchi.push(new Blocco(numeroBloccoIniziale+3,x+(BLOCCO_WIDTH*3),y,colore));
        this.blocchi.push(new Blocco(numeroBloccoIniziale+4,x+(BLOCCO_WIDTH*3),y-BLOCCO_WIDTH,colore));
        this.width = (BLOCCO_WIDTH*4);
        this.height = (BLOCCO_WIDTH*2);        
    }else{
        this.blocchi.push(new Blocco(numeroBloccoIniziale,x,y,colore));
        this.blocchi.push(new Blocco(numeroBloccoIniziale+1,x,y+BLOCCO_WIDTH,colore));
        this.blocchi.push(new Blocco(numeroBloccoIniziale+2,x,y+(BLOCCO_WIDTH*2),colore));
        this.blocchi.push(new Blocco(numeroBloccoIniziale+3,x,y+(BLOCCO_WIDTH*3),colore));
        this.blocchi.push(new Blocco(numeroBloccoIniziale+4,x+BLOCCO_WIDTH,y+(BLOCCO_WIDTH*3),colore));
        this.width = (BLOCCO_WIDTH*2);
        this.height = (BLOCCO_WIDTH*4);
    }
    this.rotate = function(){
        if(this.velY!=0){
            if(orientamento=="o"){
                this.blocchi[1].x = this.blocchi[0].x;
                this.blocchi[1].y = this.blocchi[0].y + this.blocchi[0].height;
                this.blocchi[2].x = this.blocchi[0].x;
                this.blocchi[2].y = this.blocchi[0].y + (this.blocchi[0].height*2);
                this.blocchi[3].x = this.blocchi[0].x;
                this.blocchi[3].y = this.blocchi[0].y + (this.blocchi[0].height*3);
                this.blocchi[4].x = this.blocchi[0].x + this.blocchi[4].width;
                this.blocchi[4].y = this.blocchi[0].y + (this.blocchi[0].height*3);
                orientamento="v";
                /*for(let i=0;i<this.blocchi.length;++i){
                    let blocco = this.blocchi[i];
                    console.log(`Blocco numero ${blocco.numero}, x: ${blocco.x}, y: ${blocco.y}`);
                }*/
            }else{
                this.blocchi[1].x = this.blocchi[0].x + this.blocchi[0].width;
                this.blocchi[1].y = this.blocchi[0].y;
                this.blocchi[2].x = this.blocchi[0].x + (this.blocchi[0].width*2);
                this.blocchi[2].y = this.blocchi[0].y;
                this.blocchi[3].x = this.blocchi[0].x + (this.blocchi[0].width*3);
                this.blocchi[3].y = this.blocchi[0].y;
                this.blocchi[4].x = this.blocchi[0].x + (this.blocchi[0].width*3);
                this.blocchi[4].y = this.blocchi[0].y - this.blocchi[0].height;
                orientamento="o";
                /*for(let i=0;i<this.blocchi.length;++i){
                    let blocco = this.blocchi[i];
                    console.log(`Blocco numero ${blocco.numero}, x: ${blocco.x}, y: ${blocco.y}`);
                }*/
            }
        }        
    }
    /*
    for(let i=0;i<this.blocchi.length;++i){
        let blocco = this.blocchi[i];
        console.log(`Blocco numero ${blocco.numero}, x: ${blocco.x}, y: ${blocco.y}`);
    }*/
    
}