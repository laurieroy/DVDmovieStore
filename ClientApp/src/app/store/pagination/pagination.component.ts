import { Component, OnInit } from '@angular/core';
import { Repository } from '../../models/repository';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent {

  constructor(private repo: Repository) { }

  ngOnInit() {
  }

}
