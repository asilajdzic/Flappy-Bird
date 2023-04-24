class Cetverougao {
   constructor(x1, y1, x2, y2) {
       this.x1 = x1;
       this.y1 = y1;
       this.x2 = x2;
       this.y2 = y2;
   }
   kolizija(c)
   {
       return ((this.x1 >= c.dajX1() && this.x1 <= c.dajX2() && this.y1 >= c.dajY1() && this.y1 <= c.dajY2())
        || (this.x2 >= c.dajX1() && this.x2 <= c.dajX2() && this.y1 >= c.dajY1() && this.y1 <= c.dajY2())
        || (this.x1 >= c.dajX1() && this.x1 <= c.dajX2() && this.y2 >= c.dajY1() && this.y2 <= c.dajY2())
        || (this.x2 >= c.dajX1() && this.x2 <= c.dajX2() && this.y2 >= c.dajY1() && this.y2 <= c.dajY2()));
   }
   dajX1() {
    return this.x1;
   }
   dajY1() {
       return this.y1;
   }
   dajX2() {
    return this.x2;
   }
   dajY2() {
    return this.y2;
   }
}

export default Cetverougao;
