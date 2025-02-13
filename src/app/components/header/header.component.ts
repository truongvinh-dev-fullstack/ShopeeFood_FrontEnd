import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SelectModule } from 'primeng/select';

@Component({
  selector: 'app-header',
  imports: [SelectModule, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  selectedCity = { name: 'HCM', id: 2 };
  cities = [
    { name: 'Hà Nội', id: 1, count: 1231 },
    { name: 'HCM', id: 2, count: 2131 },
  ];

  handle () {
    console.log("selectedCity: ", this.selectedCity)
  }
}
