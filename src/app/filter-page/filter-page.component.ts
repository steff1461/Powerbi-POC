import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-filter-page',
  templateUrl: './filter-page.component.html',
  styleUrls: ['./filter-page.component.scss']
})
export class FilterPageComponent implements OnInit {
  isGeneInfoOnRisk: boolean;
  isRiskConcept: boolean;
  isSecurityObjectives: boolean;
  isMaturity: boolean;

  constructor() {
  }

  ngOnInit(): void {
    this.isGeneInfoOnRisk = true;
  }

  displayComponent(info: string): void {
    switch (info) {
      case 'genInfoOnRisk':
        this.isGeneInfoOnRisk = true;
        this.isSecurityObjectives = false;
        this.isMaturity = false;
        this.isRiskConcept = false;
        break;
      case 'riskConcepts':
        this.isRiskConcept = true;
        this.isGeneInfoOnRisk = false;
        this.isSecurityObjectives = false;
        this.isMaturity = false;
        break;
      case 'security':
        this.isRiskConcept = false;
        this.isGeneInfoOnRisk = false;
        this.isSecurityObjectives = true;
        this.isMaturity = false;
        break;
      case 'maturity':
        this.isRiskConcept = false;
        this.isGeneInfoOnRisk = false;
        this.isSecurityObjectives = false;
        this.isMaturity = true;
        break;
    }
  }
}
