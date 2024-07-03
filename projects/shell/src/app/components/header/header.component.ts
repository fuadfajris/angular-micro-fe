import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav() {
    const mobileNav = document.querySelector('.hamburger');
    const navbar = document.querySelector('.menubar');
    navbar?.classList.toggle('active');
    mobileNav?.classList.toggle('hamburger-active');
  }

}
