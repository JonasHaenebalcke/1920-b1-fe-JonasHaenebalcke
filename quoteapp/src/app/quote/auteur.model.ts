import { Quote } from './quote.model';

interface AuteurJson {
   voornaam: string,
   achternaam: string,
   omschrijving: string,
   quotes?: Quote[],
   id?: string,
   foto?: string
  }
  export class Auteur {
   
   
    constructor(
        private _voornaam: string,
        private _achternaam: string,
        private _omschrijving: string,
        private _id?: number,
        private _quotes?: Quote[],
        private _foto?: string
      ) {}
  
//#region Getters & Seters
public get foto(): string {
    return this._foto;
}
public set foto(value: string) {
    this._foto = value;
}
public get id(): number {
    return this._id;
}
public set id(value: number) {
    this._id = value;
}
public get omschrijving(): string {
    return this._omschrijving;
}
public set omschrijving(value: string) {
    this._omschrijving = value;
}
public get quotes() {
    return this._quotes;
}
public set quotes(value) {
    this._quotes = value;
}
public get achternaam(): string {
    return this._achternaam;
}
public set achternaam(value: string) {
    this._achternaam = value;
}
public get voornaam(): string {
    return this._voornaam;
}
public set voornaam(value: string) {
    this._voornaam = value;
}
//#endregion

    static fromJSON(json: AuteurJson): Auteur {
    const auteur = new Auteur(json.voornaam, json.achternaam, json.omschrijving, Number(json.id), json.quotes, json.foto);
      return auteur;
    }

    toJSON(): AuteurJson {
        return { voornaam: this.voornaam, achternaam: this.achternaam, omschrijving: this.omschrijving }
    }



  }