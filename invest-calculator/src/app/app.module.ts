import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InvestmentResutsComponent } from './investment-resuts/investment-resuts.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserInputModule } from './user-input/user-input.module';

@NgModule({
  declarations: [AppComponent, HeaderComponent, InvestmentResutsComponent],
  imports: [BrowserModule, UserInputModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
