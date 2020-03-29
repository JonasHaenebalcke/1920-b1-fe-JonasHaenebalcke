import { Quote } from './quote.model';


const JsonQuotes = [
    {
        inhoud: 'coole quote enzo',
        rating: '5',
        date: '2020-02-07T18:25:43.511Z',
        opmerkingen: ['Wat een quote', 'revolutionair' ,'impressive'],
        auteur: 'Jonas Haenebalcke',
        id: '5' //Moet ik id zelf meegeven?
    },
    {
        inhoud: 'Domme quote enzo',
        rating: '20',
        date: '2020-02-07T18:25:43.511Z',
        opmerkingen: ['Wat een quote', 'Goed gezegd Axel' ,'impressive'],
        auteur: 'Axel Beuselinck',
        id: '6' //Moet ik id zelf meegeven?
    }
]

export const QUOTES: Quote[] = JsonQuotes.map(Quote.fromJSON);