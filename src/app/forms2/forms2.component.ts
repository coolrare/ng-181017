import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { PhoneNumberValidator } from '../shared/PhoneNumberValidator';

@Component({
  selector: 'app-forms2',
  templateUrl: './forms2.component.html',
  styleUrls: ['./forms2.component.css']
})
export class Forms2Component implements OnInit {

  data: any;
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(10)
        ]
      ],

      tels: this.fb.array([
        this.fb.control('', [PhoneNumberValidator, Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
        this.fb.control('', [PhoneNumberValidator, Validators.required, Validators.minLength(10), Validators.maxLength(10)])
      ])

    });

    this.data = {
      name: 'Will',
      tels: [
        "0944444444",
        "0988888888"
      ]
    };

    this.form.reset(this.data);
  }

  resetForm() {
    this.form.reset(this.data);
  }

  addTelField() {
    let arr = this.form.get('tels') as FormArray;
    arr.push(this.fb.control(''));
  }

}
