import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  data: any = {
    name: 'Will',
    tel: '0988-888888'
  };

  constructor() { }

  ngOnInit() {
  }

}
