import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication-layout',
  templateUrl: './authentication-layout.component.html',
  styleUrls: ['./authentication-layout.component.css']
})
export class AuthenticationLayoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}
