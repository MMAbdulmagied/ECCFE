import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { Customer } from 'src/app/Models/customer.model';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ComplainService } from 'src/app/Services/complain.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-complain',
  templateUrl: './new-complain.component.html',
  styleUrls: ['./new-complain.component.css'],
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
export class NewComplainComponent implements OnInit {

  currentUser: Customer;
  errors: any;
  isSubmit: boolean = false;

  firstFormGroup = this._formBuilder.group({
    nameCtrl: new FormControl(''),
    mobileCtrl: new FormControl(''),
    emailCtrl: new FormControl(''),
  });
  secondFormGroup = this._formBuilder.group({
    titleCtrl: new FormControl('', Validators.required),
    descCtrl: new FormControl('', Validators.required),
  });

  constructor(public service: ComplainService, public translate: TranslateService, private _formBuilder: FormBuilder, private _router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('user') as string) as Customer;
  }

  ngOnInit(): void {
    this.initComplain();
  }
  initComplain() {
    this.service.complain = {
      id: 0,
      createddate: new Date(),
      customerId: 0,
      customerName: '',
      description: '',
      isCompleted: false,
      title: ''
    }
  }
  fillComplainObj() {

    this.service.complain.title = this.secondFormGroup.value.titleCtrl as string;
    this.service.complain.description = this.secondFormGroup.value.descCtrl as string;
    this.service.complain.customerId = this.currentUser.id;
    

  }
  onSave() {

    this.isSubmit = true;
    this.fillComplainObj();
    this.service.complain.isCompleted = false;

    this.service.postComplain().subscribe(res => {
      this._router.navigateByUrl('/complains');
    }, err => {
      this.errors = err.error.errors;
      if (this.errors == null)
        this.errors = err.error;
    });
  }
  onComplete() {
    this.isSubmit = true;
    this.fillComplainObj();
    this.service.complain.isCompleted = true;
    
    this.service.postComplain().subscribe(res => {
      this._router.navigateByUrl('/complains');
    }, err => {
      this.errors = err.error.errors;
      if (this.errors == null)
        this.errors = err.error;
    });
  }
}
