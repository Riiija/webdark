import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  readonly apiSalarie='https://localhost:44332/api/salarie';

  constructor(private http: HttpClient) { }

  getSalarie(): Observable<any>{
    return this.http.get<any>(this.apiSalarie);
  }

}
