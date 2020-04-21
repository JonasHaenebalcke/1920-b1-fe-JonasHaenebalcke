import { Quote } from '@angular/compiler';
import { Auteur } from './auteur.model';

interface OpmerkingJson {
    inhoud: string;
    rating?: string;
    date: string;
    auteur: string;
    id?: string;
}
export class Opmerking {
    constructor(
        private _inhoud: string,
        private _date = new Date,
        private _auteur: string,
        private _rating?: number,
        private _id?: number
    ) { }

    //#region Getters & Setters

    
    public get rating(): number {
        return this._rating;
    }
    public set rating(value: number) {
        this._rating = value;
    }
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    public get date() {
        return this._date;
    }
    public set date(value) {
        this._date = value;
    }
    // public get quote() {
    //     return this._quote;
    // }
    // public set quote(value) {
    //     this._quote = value;
    // }

    public get inhoud(): string {
        return this._inhoud;
    }
    public set inhoud(value: string) {
        this._inhoud = value;
    }
    public get auteur(): string {
        return this._auteur;
    }
    public set auteur(value: string) {
        this._auteur = value;
    }
    //#endregion

    static fromJSON(json: OpmerkingJson): Opmerking {
        const opmerking = new Opmerking(json.inhoud,  new Date(json.date), json.auteur, Number(json.id));
        return opmerking;
    }

    toJSON(): OpmerkingJson {
        return{
            inhoud: this.inhoud, date: this.date.toDateString(), auteur: this.auteur 
         };
    }
}
