import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

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

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('送出表單!!');
    }
  }

}
