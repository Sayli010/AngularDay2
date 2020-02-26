import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, ContentChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,
      OnChanges,DoCheck,AfterContentInit,AfterContentChecked,
      AfterViewInit,AfterViewChecked {
 
  @Input() parentData :string;
  @Output() childData = new EventEmitter<string>();
  @ViewChild('viewContents',{static:true})
  viewChildVariable: ElementRef;


  @ContentChild('childComponentData',{static:true})
  contentChildVariable:ElementRef;
  constructor( ) { }
  
  ngOnInit() {
    this.childData.emit("This is child component data");
    console.log(this.contentChildVariable.nativeElement.innerText)
    console.log("This is ngOnInit() ")
  }
  ngOnChanges(){
    console.log("This is ngOnChanges() ")
  }
  ngDoCheck() {
    console.log("This is ngDoCheck()")
  }
  ngAfterContentInit(): void {
    console.log("This is ngAfterContentInit()")
  }
  ngAfterContentChecked(): void {
    console.log("This is ngAfterContentChecked()")
  }
  ngAfterViewInit(): void {
    console.log("This is ngAfterViewInit()") 
  }
  ngAfterViewChecked(): void {
    console.log("This is ngAfterViewChecked()")
  }



}
