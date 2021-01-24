import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { 
    console.log(" child constructor");
  }

  ngOnInit(): void {
    console.log("child ngOnInit");
  }
  ngOnChanges(){
    console.log("child ngOnChanges");
  }

  ngDoCheck(){
    console.log("child ngDoCheck");
  }

  ngAfterContentInit(){
    console.log("child ngAfterContentInit");
  }
  ngAfterContentChecked(){
    console.log("child ngAfterContentChecked");
  }

  ngAfterViewInit(){
    console.log("child ngAfterViewInit");
  }
  ngAfterViewChecked(){
    console.log("child ngAfterViewChecked");
  }

  ngOnDestroy(){
    console.log("child ngOnDestroy");
  }
}
