class Prepreka {
    constructor(sirina, visina, sirinaPrepreke, razmak, minRazmak, brzinaIgre){
        this.sirina = sirina;
        this.visina = visina;
        this.x = sirina;
        this.y = 0;
        this.sirinaPrepreke = sirinaPrepreke;
        this.visinaPrepreke = Math.random() * visina * 0.35 + 0.1 * visina;
        this.brzinaIgre = brzinaIgre;
        this.razmak = razmak;
        this.minRazmak = minRazmak;
        this.prosla = false;
    }
    crtaj(ctx) {
        ctx.fillStyle = 'rgb(0, 100, 0)';
        ctx.fillRect(this.x, this.y, this.sirinaPrepreke, this.visinaPrepreke);
        ctx.fillRect(this.x, this.visinaPrepreke + this.razmak, this.sirinaPrepreke, this.visina - this.visinaPrepreke - this.razmak);
    }
    azuriraj() {
        this.x-= this.brzinaIgre;
        if(this.x <= -this.sirinaPrepreke) this.trebaBrisati = true;
    }
    dajX1() {
        return this.x;
    }
    dajX2() {
        return this.x + this.sirinaPrepreke;
    }
    dajY1() {
        return this.y;
    }
    dajY2() {
        return this.y + this.visinaPrepreke;
    }
    dajY3() {
        return this.visinaPrepreke + this.razmak;
    }
    dajY4() {
        return this.visina;
    }
    proslaJe() {
        this.prosla = true;
    }
    jeLiProsla() {
        return this.prosla;
    }
    promijeniBrzinu(novaBrzina) {
        this.brzinaIgre = novaBrzina;
    }
}

export default Prepreka;
