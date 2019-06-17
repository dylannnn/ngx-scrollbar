import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { BidiModule } from '@angular/cdk/bidi';
import { ObserversModule } from '@angular/cdk/observers';

import { NgScrollbar } from './ng-scrollbar';
import { NgCustomScrollbar } from './scrollbars/ng-custom-scrollbar';
import { CustomScrollView } from './custom-scroll-view';

@NgModule({
  imports: [
    CommonModule,
    ObserversModule,
    LayoutModule,
    BidiModule
  ],
  declarations: [
    NgScrollbar,
    NgCustomScrollbar,
    CustomScrollView
  ],
  exports: [
    NgScrollbar,
    CustomScrollView
  ]
})
export class NgScrollbarModule {
}
