import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { AutosService } from './autos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portal';

  constructor(private sidebarService: NbSidebarService, private serAutos: AutosService) {
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
    console.log(this.serAutos.getColor())
  }

}
