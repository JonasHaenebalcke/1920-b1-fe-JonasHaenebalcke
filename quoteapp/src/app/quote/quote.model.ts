import { Opmerking } from './opmerking.model';
import { Auteur } from './auteur.model';

export interface QuoteJson {
    inhoud: string;
    // rating?: string;
    date: string;
    opmerkingen?: Opmerking[];
    auteurId: number;
    auteur?: Auteur;
    id?: string;

    
}
export class Quote {


    constructor(
        private _inhoud: string,      
        private _date = new Date,
        private _opmerkingen = new Array<Opmerking>(),
        private _auteurId?: number,
        private _auteur?: Auteur,
        // private _rating?: number,
        private _id?: number
    ) { }


    addOpmerking(opmerking: Opmerking) {
        this._opmerkingen.push(opmerking);
    }

    static fromJSON(json: QuoteJson): Quote {
        const quote = new Quote(json.inhoud, new Date(json.date), json.opmerkingen, json.auteur.id, json.auteur,/* Number(json.rating),*/ Number(json.id));
        return quote;
    }

    toJSON(): QuoteJson {
        console.log("TO JSON")
        console.log(this.inhoud);
        console.log("END TO JSON")
        return { inhoud: this.inhoud, date: this.date.toDateString(), auteurId: this.auteurId };
    }

    //#region Getters & Setter

    public get auteurId(): number {
        return this._auteurId;
    }
    public set auteurId(value: number) {
        this.auteurId = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get auteur() {
        return this._auteur;
    }
    public set auteur(value) {
        this._auteur = value;
    }
    public get opmerkingen() {
        return this._opmerkingen;
    }
    public set opmerkingen(value) {
        this._opmerkingen = value;
    }
    public get date() {
        return this._date;
    }
    public set date(value) {
        this._date = value;
    }
    // public get rating(): number {
    //     return this._rating;
    // }
    // public set rating(value: number) {
    //     this._rating = value;
    // }
    public get inhoud(): string {
        return this._inhoud;
    }
    public set inhoud(value: string) {
        this._inhoud = value;
    }
    //#endregion

    
}