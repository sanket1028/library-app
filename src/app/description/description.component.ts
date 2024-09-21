import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../shared/service/categories.service';
import { Book, Categories } from '../shared/models/Categories';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrl: './description.component.css',
})
export class DescriptionComponent implements OnInit {
  routedCategory?: Categories;
  constructor(
    private categoryService: CategoriesService,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const name = params['name'];
      this.categoryService.getData().subscribe((data) => {
        this.routedCategory = data.find((category) => category.name === name);
      });
    });
  }
}
