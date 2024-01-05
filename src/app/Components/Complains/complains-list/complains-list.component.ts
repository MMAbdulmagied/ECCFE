import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Complain } from 'src/app/Models/complain.model';
import { ComplainService } from 'src/app/Services/complain.service';

@Component({
  selector: 'app-complains-list',
  templateUrl: './complains-list.component.html',
  styleUrls: ['./complains-list.component.css']
})
export class ComplainsListComponent implements OnInit {

  constructor(public translate: TranslateService,public service: ComplainService, private _router: Router) { }

  ngOnInit(): void {
    this.service.getAllComplains()
  }
  onComplete(complain: Complain) {
    debugger;
    complain.isCompleted = true;
    this.service.putComplain(complain).subscribe();
  }
  fillData(item: Complain)
  {
    this.service.complain.id = item.id;
    this.service.complain.title = item.title;
    this.service.complain.description = item.description;
    this._router.navigateByUrl('/complains/newComplain');
  }
}
