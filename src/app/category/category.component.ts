import { Component, OnInit } from '@angular/core';
import { Category } from './category';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }
  title = "Category List"
  categories: Category[] = [
    { id: 1, name: "Electronics" },
    { id: 1, name: "Fashion" },
    { id: 1, name: "Books" },
    { id: 1, name: "Sports" },
  ]

  ngOnInit(): void {
  }

}
