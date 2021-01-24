import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

export interface LifeCycleEvent {
  id: number;
  name: string;
  color: string;
}

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})

export class LifecycleChildComponent implements OnInit, OnDestroy, OnChanges {

  @Input() name: string = "";
  @Input() age: number = 0;
  @Input() food: string = "";

  events:LifeCycleEvent[]=[];
  nextEventId: number=0;

  colors:string[]=["accent","warn","primary"];

  intervalRef;
  constructor() {
    console.log(this.name + " construc")
    this.newEvent("constructor");
    this.intervalRef = setInterval(()=>{console.log("interval")},2000);
  }

  ngOnInit(): void {
    console.log(this.name + " init")
    this.newEvent("ngOnInit");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.name + " change" +changes.name.firstChange+" last value: "+changes.name.previousValue)
    for (let propname in changes){      
      //console.log(changes[propname]);
    }
    //if(changes['name']){}
    this.newEvent("ngOnChanges");
  }

  ngAfterContentInit(){
    console.log("ngAfterCotnentInit")
  }

  ngAfterViewInit(){

  }

  ngOnDestroy() {
    console.log(this.name + " destroy")
    this.newEvent("ngOnDestroy");
    clearInterval(this.intervalRef);
  }

  newEvent(name: string) {
    let i = this.nextEventId++;
    this.events.push({
      id: i,
      color: this.colors[i%this.colors.length],
      name: name
    })
    setTimeout(() => {
      let idx = this.events.findIndex((e)=>e.id==i);
     
      if (idx>=0){
        this.events.splice(idx,1);
      }
    }, 3000+this.events.length*2000);
  }

}
