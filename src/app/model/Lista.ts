import { ItemLista } from "./ItemLista";

export class Lista{
    public id: number = 0 ;
    public data: Date = new Date();
    public nomeMercado: string = "";
    public valorTotal: number = 0;
    public status: number = 0;
    public itens: ItemLista[] = [];

}