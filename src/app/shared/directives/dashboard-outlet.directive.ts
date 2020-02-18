import { Directive, Input, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDashboardOutlet]'
})
export class DashboardOutletDirective {
  @Input() item;

  constructor(public viewContainerRef: ViewContainerRef) { }

}
