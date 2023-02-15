export class Ptica {
    constructor(sirina, visina, velicina, gravitacija, ubrzanje)
    {
        this.sirina = sirina;
        this.visina = visina;
        this.x = 0.2 * sirina;
        this.y = 0.5 * visina;
        this.velicina = velicina;
        this.gravitacija = gravitacija;
        this.ubrzanje = ubrzanje;
    }
    crtaj(ctx) {
        ctx.fillStyle = "rgb(200, 0, 0)";
        ctx.fillRect(this.x, this.y, this.velicina, this.velicina);
    }
    skok() {
        if(this.y > this.ubrzanje) this.y-= this.ubrzanje;
        else this.y = 0;
    }
    azuriraj() {
        if(this.y < this.visina - this.velicina) this.y+= this.gravitacija;
    }
    dajX1() {
        return this.x;
    }
    dajY1() {
        return this.y;
    }
    dajX2() {
        return this.x + this.velicina;
    }
    dajY2() {
        return this.y + this.velicina;
    }
}