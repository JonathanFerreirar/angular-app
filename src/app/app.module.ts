import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TopComponent } from './top/top.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent, TopComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
