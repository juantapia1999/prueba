const INFINITIVO = "be bear beat become begin bend bite blow break bring build burn buy catch choose come cost cut dig do draw dream drink drive eat fall feed feel fight find fly forbid forget forgive freeze get give go grow hang have hear hide hold hurt keep know learn leave lend let light lose make mean meet pay put read ride ring rise run say see sell send shake shine shoot show shut sing sit sleep smell speak speed spell spend spread stand steal stick swear sweep swim take teach tell think throw understand wake-up wear win wind write".split(" ");
const PASADO = "was/were bore beat became began bent bit blew broke brought built burnt bought caught chose came cost cut dug did drew dreamt drank drove ate fell fed felt fought found flew forbade forgot forgave froze got gave went grew hung had heard hid held hurt kept knew learnt left lent let lit lost made meant met paid put read rode rang rose ran said saw sold sent shook shone shot showed shut sang sat slept smelt spoke sped spelt spent spread stood stole stuck swore swept swam took taught told thought threw understood woke-up wore won wound wrote".split(" ");
const PARTICIPIO = "been born beaten become begun bent bitten blown broken brought built burnt bought caught chosen come cost cut dug done drawn dreamt drunk driven eaten fallen fed felt fought found flown forbidden forgotten forgiven frozen got given gone grown hung had heard hidden held hurt kept known learnt left lent let lit lost made meant met paid put read ridden rung risen run said seen sold sent shaken shone shot shown shut sung sat slept smelt spoken sped spelt spent spread stood stolen stuck sworn swept swum taken taught told thought thrown understood woken-up worn won wound written".split(" ");
const PALABRA = "ser/estar nacer golpear convertir comenzar doblar morder soplar(b) romper traer construir quemar comprar agarrar elegir venir costar cortar cavar hacer dibujar soñar beber manejar comer caer alimentar sentir pelear encontrar volar prohibir olvidar perdonar helar obtener dar ir crecer colgar tener oir esconder sostener herir guardar conocer aprender partir prestar permitir encender perder fabricar significar encontrarse pagar poner leer montar sonar asomar correr decir ver vender enviar sacudir brillar disparar mostrar cerrar cantar sentar dormir oler hablar apresurar deletrear gastar/pasar extender pararse robar pegar jurar barrer nadar tomar enseñar contar pensar arrojar entender despertar usar ganar soplar(w) escribir".split(" ");
var index = 0;

function verificar() {
    let past = (document.getElementById("pasado").value).toLowerCase();
    let particip = (document.getElementById("participio").value).toLowerCase();
    let infi = (document.getElementById("infinitivo").value).toLowerCase();

    if (infi != INFINITIVO[index]) {
        document.getElementById("errorInf").innerText="Error en el infinitivo, deberia ser: "+INFINITIVO[index];
    }

    if (past != PASADO[index]) {
        document.getElementById("errorPas").innerText="Error en el pasado, deberia ser: "+PASADO[index];
    }

    if (particip != PARTICIPIO[index]) {
        document.getElementById("errorPar").innerText="Error en el participio, deberia ser: "+PARTICIPIO[index];
    }


    if ((past == PASADO[index]) && (particip == PARTICIPIO[index]) && (infi == INFINITIVO[index])) {
        alert("Felicitaciones, escribio de manera correcta");
    }
}

function random() {
    index = Math.floor(Math.random() * 98);
    document.getElementById("palabra").innerText = PALABRA[index];
}

function reinicio() {
    document.getElementById("palabra").innerHTML = "Verbo";
    document.getElementById("errorInf").innerHTML="";
    document.getElementById("errorPas").innerHTML="";
    document.getElementById("errorPar").innerHTML="";

    document.getElementById("infinitivo").value="";
    document.getElementById("pasado").value="";
    document.getElementById("participio").value="";
}

