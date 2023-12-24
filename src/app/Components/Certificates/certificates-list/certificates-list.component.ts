import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../../../Services/certificate.service';

@Component({
  selector: 'app-certificates-list',
  templateUrl: './certificates-list.component.html',
  styleUrls: ['./certificates-list.component.css']
})
export class CertificatesListComponent implements OnInit {

  constructor(public service:CertificateService) { }

  ngOnInit(): void {
    this.service.getAllCertificates()
  }

}
