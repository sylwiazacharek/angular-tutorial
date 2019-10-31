import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header-bar',
  templateUrl: './headerBar.component.html',
  styleUrls: ['./headerBar.component.css']
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
