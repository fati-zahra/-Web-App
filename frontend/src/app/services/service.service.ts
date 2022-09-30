import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from "rxjs";
import { Router } from '@angular/router'

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  baseurl = "http://127.0.0.1:8000/api";
  httpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
    //'Access-Control-Allow-Credentials': 'true',
    //'Access-Control-Allow-Headers': 'Content-Type',
});

  constructor(private http: HttpClient,private _router: Router) { }
/*
  logoutUser() {
    localStorage.removeItem('token')
    this._router.navigate(['/login'])
   // return localStorage.getItem('token')
   return localStorage.getItem('token')

  }

  getToken() {
    return localStorage.getItem('token')
  }

  loggedIn() {
    return !!localStorage.getItem('token')    
  }
  register(user){
    return this.http.post("http://127.0.0.1:8080" + '/api/register/',user
    );
  }
  login(user) {
    return this.http.post("http://127.0.0.1:8080"+ '/api/login/', user

    );
  }*/
  getAll(): Observable<any> {
    return this.http.get(this.baseurl + '/products',
    {headers: this.httpHeaders});
  }
  read(id): Observable<any> {
    return this.http.get(`${this.baseurl+ '/products'}/${id}`);
  }
  getAll_user_pro(): Observable<any> {
    return this.http.get("http://localhost:9000/api/product",
    {headers: this.httpHeaders});
  }
  
  create(products: { id: any; title: any; image?: string; likes?: number; }): Observable<any> {
    const body = {id: products.id , title: products.title, image: products.image , likes: products.likes};
    return this.http.post(this.baseurl + '/products', body,
    {headers: this.httpHeaders});
  }
  delete(id): Observable<any> {
    return this.http.delete(`${this.baseurl + '/products'}/${id}`);
  }
  /*update(product: { id: any; image: any; title: any; likes: any; }): Observable<any> {
    const body = {id: product.id , image: product.image, title:product.title, likes:product.likes };
    return this.http.put(this.baseurl + '/products/' + product.id , body,
    {headers: this.httpHeaders});
  }*/
  update(id, data): Observable<any> {
    return this.http.put(`${this.baseurl+ '/products'}/${id}`, data);
  }
  like(id): Observable<any> {
    return this.http.get("http://localhost:9000/api/products/" + id + '/like' ,
)  }
  getOne(id: number): Observable<any> {
    return this.http.get(this.baseurl + '/products/' + id  ,
    {headers: this.httpHeaders});
  }
}
