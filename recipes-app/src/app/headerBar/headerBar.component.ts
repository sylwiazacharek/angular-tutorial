import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './header-bar.component.html',
  styleUrls: ['./header-bar.component.css']
})
export class HeaderBarComponent implements OnInit {
  collapsed = true;
  
  @Output() pageChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }
  
  onSelect(page: string) {
    this.pageChange.emit(page);
  }
}
