import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriesService } from '../shared/service/categories.service';
import { Categories } from '../shared/models/Categories';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.css',
})
export class CategoriesComponent implements OnInit {
  categories!: Categories[];
  selectedCategory?: Categories;
  constructor(
    private router: Router,
    private categoriesService: CategoriesService
  ) {}
  ngOnInit(): void {
    this.categoriesService.getData().subscribe((data) => {
      this.categories = data;
      console.log(data);
    });
  }
}
