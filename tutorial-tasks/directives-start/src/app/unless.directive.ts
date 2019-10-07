import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input('appUnless') set unless(condition: boolean) { // unless is still a property, it's just a shortcut for a setter's implementation
    if (!condition) {
      this.viewContainerReference.createEmbeddedView(this.templateReference);
    } else {
      this.viewContainerReference.clear();
    }
  }

  constructor(private templateReference: TemplateRef<any>, private viewContainerReference: ViewContainerRef) { }

}
