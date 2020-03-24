import { Directive, Input, IterableDiffer, IterableDiffers, OnChanges,
  OnInit, SimpleChanges, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNewNgFor]'
})
export class NewNgForDirective implements OnInit, OnChanges {

  // @Input('appNewNgFor') items: any[];

  // @Input() valueName: any;

  
  @Input('appNewNgFor') items: [];

  constructor(private templateRef: TemplateRef<any>, private viewContainerRef: ViewContainerRef) {
  }

  ngOnInit() {
    this.populate();
  }

  ngOnChanges(changes: SimpleChanges) {
    this.populate();
  }

  populate() {
    if (this.items) {
      for (const item of this.items) {
        if (item) {
          const embeddedView = this.viewContainerRef.createEmbeddedView(this.templateRef);
          embeddedView.context.$implicit = item;
        }
      }
    }
  }
}
