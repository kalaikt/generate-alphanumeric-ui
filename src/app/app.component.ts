import { Component } from '@angular/core';
import { labels } from '../labels';
import { GenerateAlphanumericService } from './services/generate-alphanumeric.service';
import { Response } from './services/response.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  labels = labels;
  telephoneNumber = '5657565';
  currentPage = 1;
  alphanumericCombination: Response;
  pages = [];

  constructor(private service: GenerateAlphanumericService) {}

  onSubmit() {
    this.service
      .getResponse(this.telephoneNumber, this.currentPage)
      .subscribe((data: any) => {
        this.alphanumericCombination = data;
        this.pages = new Array(Math.ceil(data.count / 500));
      });
  }
}
