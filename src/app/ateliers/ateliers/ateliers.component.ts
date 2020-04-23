import { ContentfulService } from '../../contentful.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ateliers',
  templateUrl: './ateliers.component.html',
  styleUrls: ['./ateliers.component.sass']
})

export class AteliersComponent implements OnInit {

  pages: Observable<any>;

  constructor(private contentful: ContentfulService) {}

  ngOnInit() {
    this.pages = this.contentful.getContent('4sTZnOfhCLHWTnhXoAVIHS');
  }
};
