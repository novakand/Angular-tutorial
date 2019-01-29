import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {

  ngClass = ` <div [ngClass]="[ enabled ? 'bg-success' : 'bg-warning']></div>`;
  ngStyle = `<div [ngStyle]="enabled ? {color:'blue'} : {color:'red'}">example</div>`;
  ngIf = '<div *ngIf="enabled">Content</div>';
  ngFor='<div *ngFor="let item of items; let i = index"></div>';

  constructor() { }

  ngOnInit() {
  }

}
