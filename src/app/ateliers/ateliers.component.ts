import { ContentfulService } from '../contentful.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ateliers',
  templateUrl: './ateliers.component.html',
  styleUrls: ['./ateliers.component.sass']
})

export class AteliersComponent implements OnInit {

  car: Observable<any>;

  constructor(private contentful: ContentfulService) {}

  ngOnInit() {
    this.car = this.contentful.getContent('wRykSDdubQ0qZdXc8Xpj8');
  }
};
