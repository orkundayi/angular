import { Component, inject } from '@angular/core';
import { InvestMentService } from '../investment-service';

@Component({
  selector: 'app-investment-resuts',
  standalone: false,
  templateUrl: './investment-resuts.component.html',
  styleUrl: './investment-resuts.component.css',
})
export class InvestmentResutsComponent {
  private investmentService = inject(InvestMentService);
  get results() {
    return this.investmentService.resultData;
  }
}
