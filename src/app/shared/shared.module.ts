import { HeroService } from './services/hero.service';
import { MaterialModule } from './modules/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientModule } from '@angular/common/http';
import { InterceptorModule } from './modules/interceptor.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MaterialModule,
    HttpClientModule,
    NgxSpinnerModule,
    InterceptorModule
  ],
  exports: [
    MaterialModule,
    NgxSpinnerModule,
  ],
  providers: [
    HeroService
  ]
})
export class SharedModule { }
