import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  preserveWhitespaces: false,
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
