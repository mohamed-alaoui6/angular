export class product{
    private _id!: number;
    public get id(): number {
        return this._id;
    }
    public set id(value: number) {
        this._id = value;
    }
    private _name!: string;
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
    private _price!: number;
    public get price(): number {
        return this._price;
    }
    public set price(value: number) {
        this._price = value;
    }
    private _url_image: string | undefined;
    public get url_image(): string | undefined {
        return this._url_image;
    }
    public set url_image(value: string | undefined) {
        this._url_image = value;
    }

  constructor(id:number,name:string,price:number,url_image:string,quantite:number,description:string,qeerebyasali:boolean,rev:number){

     this._id=id;
     this._name=name;
     this._price=price;
     this.url_image=url_image;
     this._quantite=quantite;
     this._description=description
     this._qeerebyasali=qeerebyasali;
     this._rev=this.rev;
  }
  private _quantite!: number;
    public get quantite(): number {
        return this._quantite;
    }
    public set quantite(value: number) {
        this._quantite = value;
    }

    private _description!: string;
    public get description(): string {
        return this._description;
    }
    public set description(value: string) {
        this._description = value;
    }

    private _qeerebyasali!: boolean;
    public get qeerebyasali(): boolean {
        return this._qeerebyasali;
    }
    public set qeerebyasali(value: boolean) {
        this._qeerebyasali = value;
    }

    private _rev!: number;
    public get rev(): number {
        return this._rev;
    }
    public set rev(value: number) {
        this._rev = value;
    }
}