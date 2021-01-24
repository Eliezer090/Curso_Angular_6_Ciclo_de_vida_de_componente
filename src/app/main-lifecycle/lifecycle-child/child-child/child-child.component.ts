import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-child',
  templateUrl: './child-child.component.html',
  styleUrls: ['./child-child.component.css']
})
export class ChildChildComponent implements OnInit,OnChanges {
  @Input() name: string = "";
  constructor() { }

  ngOnInit(): void {
    console.log("child child ngOnInit "+ this.name);
  }

  ngOnChanges(){
    console.log("child child ngOnchanges "+ this.name);
  }
  ngAfterContentInit(){
    console.log("child child ngAfterCotnentInit "+ this.name);
  }
}
