import { Component } from '@angular/core';
import { InvestMentService } from '../investment-service';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css',
})
export class UserInputComponent {
  constructor(private investmentService: InvestMentService) {}

  enteredInitialInvestment = '0';
  enteredAnnualInvestment = '0';
  enteredExpectedReturn = '5';
  enteredDuration = '10';
  onSubmit() {
    this.investmentService.calculateInvestmentResults({
      initialInvestment: +this.enteredInitialInvestment,
      annualInvestment: +this.enteredAnnualInvestment,
      expectedReturn: +this.enteredExpectedReturn,
      duration: +this.enteredDuration,
    });

    this.enteredAnnualInvestment = '0';
    this.enteredInitialInvestment = '0';
    this.enteredExpectedReturn = '5';
    this.enteredDuration = '10';
  }
}
