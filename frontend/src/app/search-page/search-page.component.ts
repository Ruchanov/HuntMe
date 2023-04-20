import { Component } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  searchResults = [
    {
      title: 'Название первой вакансии',
      company: 'Название первой компании',
      salary: '100000 KZT',
      description: 'Описание'
    },
    {
      title: 'Название второй вакансии',
      company: 'Название второй компании',
      salary: '200000 KZT',
      description: 'Описание'
    }
  ];
}
