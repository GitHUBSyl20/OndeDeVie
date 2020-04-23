import { Component, NgModule } from '@angular/core';
import { MatJumbotronModule } from '@angular-material-extensions/jumbotron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

@NgModule({
  declarations: [AppComponent],
  imports: [MatJumbotronModule],
  bootstrap: [AppComponent]
})

export class AppComponent {
  active = 'active';
  title = 'ondedevie';
}
