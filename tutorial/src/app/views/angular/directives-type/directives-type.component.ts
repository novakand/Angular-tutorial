import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives-type',
  templateUrl: './directives-type.component.html',
  styleUrls: ['./directives-type.component.css']
})
export class DirectivesTypeComponent  {

  constructor() { }

  expressionGoal = `[цель]="выражение"`;
  expression=`{{выражение}}`;
  targetExpression=`(цель) ="выражение" `;
  doubleTargetExpression=`[(цель)] ="выражение"`;
}
