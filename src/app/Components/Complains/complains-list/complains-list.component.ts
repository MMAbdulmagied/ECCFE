import { Component, OnInit } from '@angular/core';
import { Complain } from 'src/app/Models/complain.model';
import { ComplainService } from 'src/app/Services/complain.service';

@Component({
  selector: 'app-complains-list',
  templateUrl: './complains-list.component.html',
  styleUrls: ['./complains-list.component.css']
})
export class ComplainsListComponent implements OnInit {

  constructor(public service: ComplainService) { }

  ngOnInit(): void {
    this.service.getAllComplains()
  }
  onComplete(complain: Complain) {
    debugger;
    complain.isCompleted = true;
    this.service.putComplain(complain).subscribe();
  }
}
