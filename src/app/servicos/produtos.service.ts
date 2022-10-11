import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }

  public getAllProdutos(): Observable<Produto[]>   {
    return this.http.get<Produto[]>(environment.urlAPI+"/produtos");
  }

  public addNewProduct(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(environment.urlAPI+"/produtos", produto);
  }
}
