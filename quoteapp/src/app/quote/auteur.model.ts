interface AuteurJson {
   voornaam: string,
   achternaam: string,
   quotes: string[],
   geboorteDatum: string,
   omschrijving: string,
   id: string,
   sterfDatum?: string,
   foto?: string
  }
  export class Auteur {
   
    constructor(
        private _voornaam: string,
        private _achternaam: string,
        private _quotes = new Array<string>(),//Is nog string voor nu omdat ik niet weet hoe objecten werken
        private _geboorteDatum = new Date(),
        private _omschrijving: string,
        private _id: number,
        private _sterfDatum?: Date,
        private _foto?: string
      ) {}
  
//#region Getters & Seters
public get foto(): string {
    return this._foto;
}
public set foto(value: string) {
    this._foto = value;
}
public get sterfDatum() {
    return this._sterfDatum;
}
public set sterfDatum(value) {
    this._sterfDatum = value;
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
public get geboorteDatum() {
    return this._geboorteDatum;
}
public set geboorteDatum(value) {
    this._geboorteDatum = value;
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
      const auteur = new Auteur(json.voornaam, json.achternaam, json.quotes, new Date(json.geboorteDatum), json.omschrijving, Number(json.id), new Date(json.sterfDatum), json.foto);
      return auteur;
    }
  
  }