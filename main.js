import {Ptica} from './ptica.js';
import {Prepreka} from './prepreka.js'
import {Cetverougao} from './cetverougao.js';

const sirina = 960;
const visina = 480;
const FPS = 60;

let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = sirina;
canvas.height = visina;

let krajIgre = false;
const velicina = 30;
const gravitacija = 1;
const ubrzanje = 35;
const sirinaPrepreke = 70;
const minRazmak = 70;
const korakBrzine = 0.3;
const korakRazmaka = 10;
let razmak = 220;
let brzinaIgre = 1.2;
let jeLiSpace = false;
let rezultat = 0;
let noviNivo = 1;

let ptica = new Ptica(sirina, visina, velicina, gravitacija, ubrzanje);
let prepreke = [];
prepreke.push(new Prepreka(sirina * 0.5, visina, sirinaPrepreke, razmak, minRazmak, brzinaIgre));
prepreke.push(new Prepreka(sirina, visina, sirinaPrepreke, razmak, minRazmak, brzinaIgre));

function main() {
    if(krajIgre) return;
    document.addEventListener('keydown', e => {
        if(e.key == ' ' && !jeLiSpace) jeLiSpace = true;
    });
    document.addEventListener('keyup', e => {
        if(e.key == ' ' && jeLiSpace) {
            jeLiSpace = false;
            ptica.skok();
        }
    });
    ctx.clearRect(0, 0, sirina, visina);
    let c = new Cetverougao(ptica.dajX1(), ptica.dajY1(), ptica.dajX2(), ptica.dajY2());
    prepreke.forEach(prepreka => {
        prepreka.crtaj(ctx);
        prepreka.promijeniBrzinu(brzinaIgre);
        prepreka.azuriraj();
        if(prepreka.dajX2() <= ptica.dajX1() && !prepreka.jeLiProsla()) {
            rezultat++;
            prepreka.proslaJe();
        }

        if(rezultat > noviNivo) {
            noviNivo*= 2;
            brzinaIgre+= korakBrzine;
            if(razmak > minRazmak) razmak-= korakRazmaka;
            console.log(razmak);
        }
        if(prepreka.dajX2() <= 0) {
            prepreke.splice(0, 1);
            prepreke.push(new Prepreka(sirina, visina, sirinaPrepreke, razmak, minRazmak, brzinaIgre));
        }
        let c1 = new Cetverougao(prepreka.dajX1(), prepreka.dajY1(), prepreka.dajX2(), prepreka.dajY2());
        let c2 = new Cetverougao(prepreka.dajX1(), prepreka.dajY3(), prepreka.dajX2(), prepreka.dajY4());
        if(c.kolizija(c1) || c.kolizija(c2)) krajIgre = true;
    });
    ctx.font = '48px sans serif';
    ctx.fillStyle = 'rgb(255, 255, 255)';
    ctx.fillText(rezultat, 15, 50);
    ptica.crtaj(ctx);
    ptica.azuriraj();
}
 setInterval(main, 1000/FPS);