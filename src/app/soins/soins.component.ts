import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ContentfulService } from '../contentful.service';

@Component({
  selector: 'app-soins',
  templateUrl: './soins.component.html',
  styleUrls: ['./soins.component.sass']
})
export class SoinsComponent implements OnInit {

  pages: Observable<any>;

  constructor(private contentful: ContentfulService) {}

  ngOnInit() {
    this.pages = this.contentful.getContent('4sTZnOfhCLHWTnhXoAVIHS');
  }
}
