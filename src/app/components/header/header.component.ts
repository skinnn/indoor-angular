import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    let number = document.getElementById('numberShow');
    number.style.display = 'none';
  }

  // Display contact number
  showNumber() {
    let number = document.getElementById('numberShow');

    if(number.style.display == 'inline') {
      number.style.display = 'none';
    } else if(number.style.display == 'none') {
      number.style.display = 'inline';
    }
  }

}
