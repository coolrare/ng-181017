import { Component, OnInit } from '@angular/core';
import { LayoutInit } from './LayoutInit';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    LayoutInit();
  }
}
