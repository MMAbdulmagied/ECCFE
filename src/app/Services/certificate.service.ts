import { Injectable } from '@angular/core';
import { Certificate } from '../Models/certificate.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CertificateService {

  url: string = "http://localhost:63140/api/Certificates"
  certs: Certificate[] | undefined;

  constructor(private http: HttpClient) { }

  getAllCertificates() {
    this.http.get(this.url).toPromise().then(
      res => {
        this.certs = res as Certificate[];
      }
    )
  }
}
