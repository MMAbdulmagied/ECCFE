import { Injectable } from '@angular/core';
import { Complain } from '../Models/complain.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {
  url: string = "http://localhost:63140/api/Complains"
  complains: Complain[] | undefined;
  complain: Complain = {
    id: 0,
    title: '',
    description: '',
    customerName: '',
    customerId: 0,
    isCompleted: false,
    createddate: new Date()
  };
  constructor(private http: HttpClient) { }

  getAllComplains() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.complains = res as Complain[];
      }
    )
  }
  postComplain() {
    return this.http.post(this.url, this.complain)
  }
  putComplain(obj: Complain) {
    return this.http.put(this.url + "/" + obj.id, obj)
  }
}
