import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { Customer } from 'src/app/Models/customer.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';
import { CertificateService } from 'src/app/Services/certificate.service';

@Component({
  selector: 'app-new-certificate',
  templateUrl: './new-certificate.component.html',
  styleUrls: ['./new-certificate.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { showError: true },
    },
  ],
  standalone: true,
  imports: [
    TranslateModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class NewCertificateComponent implements OnInit {

  currentUser: Customer;
  errors: any;
  isSubmit: boolean = false;

  firstFormGroup = this._formBuilder.group({
    nameCtrl: new FormControl(''),
    mobileCtrl: new FormControl(''),
    emailCtrl: new FormControl(''),
  });
  secondFormGroup = this._formBuilder.group({
    academicYearCtrl: new FormControl('', Validators.required),
    schoolNameCtrl: new FormControl('', Validators.required),
  });

  constructor(public service: CertificateService, public translate: TranslateService, private _formBuilder: FormBuilder, private _router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('user') as string) as Customer;
  }

  ngOnInit(): void {
    this.initCertificate();
  }
  initCertificate() {
    this.service.cert = {
      id: 0,
      customerId: 0,
      customerName: '',
      schoolName: '',
      academicYear: 0
    }
  }
  fillCertificateObj() {
    this.service.cert.schoolName = this.secondFormGroup.value.schoolNameCtrl as string;
    this.service.cert.academicYear = parseInt(this.secondFormGroup.value.academicYearCtrl as string);
    this.service.cert.customerId = this.currentUser.id;
  }
  onSave() {

    this.isSubmit = true;
    this.fillCertificateObj();

    this.service.postCertificate().subscribe(res => {
      this._router.navigateByUrl('/certificates');
    }, err => {
      this.errors = err.error.errors;
      if (this.errors == null)
        this.errors = err.error;
    });
  }
}
