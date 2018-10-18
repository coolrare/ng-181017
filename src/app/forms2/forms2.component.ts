import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.css']
})
export class Forms2Component implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['Will', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
        ]
      ],

      contacts: this.fb.group({
        tel: '0944-444444'
      })
    })
  }

}
