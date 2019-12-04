import { Injectable } from '@angular/core';
import * as contentful from 'contentful';
import { Observable, from } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ContentfulService {

  private client = contentful.createClient({
    space: 'eoaum667w49w',
    accessToken: 'KKAQ-i_9ZDCS8aw41uK8VyWGDfQ0qM6YC9ABvOT7cxo'
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
