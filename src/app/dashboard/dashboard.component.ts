import { Component, OnInit } from '@angular/core';
import { DashboardInit } from './DashboardInit';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    DashboardInit();
  }

  redirect1() {
    this.router.navigateByUrl('/charts/flot/77?q=' + 'John');
  }

  redirect2() {
    this.router.navigate(['/', 'charts', 'flot', '88'],{
      queryParams: {
        q: 'Tom'
      }
    })
  }
}

