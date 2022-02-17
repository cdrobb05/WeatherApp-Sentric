import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ZipCodeServiceService {

  constructor(private http:HttpClient) { }

  getData(url:string){
    const headerDict = {'Access-Control-Allow-Headers': 'Content-Type'}
    let headers = new Headers(headerDict)
    const headerOptions = {mode:'no-cors' ,headers : new HttpHeaders(headerDict)};
    //headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    //let url = "https://www.zipcodeapi.com/rest/ncb7p0ZTmZk58BayTEW2kwk1KUfmtLhJTC44bsCqwLcJV8lxaTG0IUZshjdT1vqL/info.json/80111/degrees"
    return this.http.get(url,headerOptions);
  }
}
