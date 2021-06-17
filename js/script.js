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

cats.forEach((elements) => {document.getElementById('milestone1').innerHTML += 
`
    <ul>
        <li>
            Il gatto ${elements.nome} è di colore ${elements.colore}
        </li>
    </ul>
    
 `
});








// Milestone 2 Dividere i gatti in due contenitori distinti in base al sesso e aggiungere a fianco di ogni gattino un fiocco colorato di rosa, se femmina, o di blu, se maschio. Il colore del fiocco deve essere più tenue se il gatto è più giovane, più scuro se il gatto è più vecchio.





















// Milestone 3 Creare un nuovo array con prima tutti i gattini femmina e poi tutti i gattini maschio, inserendo solamente nome, colore e opacità del fiocco per ogni gatto.