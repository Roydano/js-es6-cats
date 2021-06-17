// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

//*DEFINIAMO UN ARRAY DI GATTI

const cats = [

    {
        nome: 'Tom',
        eta: 7,
        colore: '#808080',
        genere: 'maschio'
    },
    
    {
        nome: 'Elias',
        eta: 3,
        colore: '#daa520',
        genere: 'maschio'

    },

    {
        nome: 'Kelly',
        eta: 1,
        colore: '#d2691e',
        genere: 'femmina'

    },

    {
        nome: 'Titti',
        eta: 11,
        colore: '#000000',
        genere: 'femmina'

    },

    {
        nome: 'Chicco',
        eta: 5,
        colore: '#f5f5dc',
        genere: 'maschio'

    }


];

document.getElementById('milestone1').innerHTML += "MILESTONE 1";

cats.forEach((elements) => {document.getElementById('milestone1').innerHTML += 
`
    <ul>
        <li>
            ${elements.nome} <i class="fas fa-cat" style="color:${elements.colore}"></i>
        </li>
    </ul>

`
});







// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.
// const opacity = () => e;

const pink = '#f2b1c2';
const blue = '#21008d';


const newCats = cats.map((element) =>{
    // const nome = element.nome;
    // const eta = element.eta;
    // const colore = element.colore;
    // const genere = element.genere;
    //! il codice ecommentato sopra possiamo abbreviarlo cosi:

    const{nome, eta, colore, genere} = element


    const opacity = element.eta / 11;

    return {
        nome,
        eta,
        colore,
        genere,
        ribbon: {
            colore : (genere == 'femmina') ? pink : blue,
            opacity : opacity
        }    
    }

});




document.getElementById('milestone1').innerHTML += "MILESTONE 2";


const maleCats = newCats.filter((element) => {
    return element.genere === 'maschio'

});

maleCats.forEach((elements) => {
    document.getElementById('milestone2').innerHTML += 
`
    <ul>
        <li>
            ${elements.nome} <i class="fas fa-cat" style="color:${elements.colore}"></i>
            <i class="fas fa-ribbon" style="color:${elements.ribbon.colore}; opacity:${elements.ribbon.opacity}"></i>,
        </li>
    </ul>

`
});


const femaleCats = newCats.filter((element) => {
    return element.genere === 'femmina'
});


femaleCats.forEach((elements) => {
    document.getElementById('milestone2').innerHTML += 
`
    <ul>
        <li>
            ${elements.nome} <i class="fas fa-cat" style="color:${elements.colore}"></i>
            <i class="fas fa-ribbon" style="color:${elements.ribbon.colore}; opacity:${elements.ribbon.opacity}"></i>,
        </li>
    </ul>

`
});






// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.


let catsMaleFemale = [...femaleCats, ...maleCats];

const catsFemaleMaleZippato = catsMaleFemale.map((element) =>{

    const {nome, colore, ribbon} = element;

    return{
        nome,
        colore,
        ribbon
    }

});

document.getElementById('milestone3').innerHTML += "MILESTONE 3";

catsFemaleMaleZippato.forEach((elements) => {

    document.getElementById('milestone3').innerHTML += 
`
    <ul>
        <li>
            ${elements.nome} <i class="fas fa-cat" style="color:${elements.colore}"></i>
            <i class="fas fa-ribbon" style="color:${elements.ribbon.colore}; opacity:${elements.ribbon.opacity}"></i>,
        </li>
    </ul>

`
});