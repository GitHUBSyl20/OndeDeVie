import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ContentfulService {

  private client = contentful.createClient({
    space: 'xqzl4tuyajo6',
    accessToken: 'XrmC8rsA3fTpwvSL0_Fky3JUoDEzLiVjFKS0_1lhyIw'
  });

  constructor() { }

  getContent(contentId): Observable<any> {
    const promise = this.client.getEntry(contentId);
    return from(promise)
      .pipe(
        map(entry => entry.fields)
      );
  }
}
