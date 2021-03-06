import { NgModule, Component, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { DxVectorMapModule } from 'devextreme-angular';

import * as mapsData from 'devextreme/dist/js/vectormap-data/usa.js';
import { StatesCollection, Service } from './app.service';

if(!/localhost/.test(document.location.host)) {
    enableProdMode();
}

@Component({
    selector: 'demo-app',
    providers: [ Service ],
    templateUrl: 'app/app.component.html',
    styleUrls: ['app/app.component.css']
})

export class AppComponent {
  usaMap: any = mapsData.usa;
  states: StatesCollection[];

  constructor(service: Service) {
    this.states = service.getStatesData();
  }

  getImagePath = (annotation) => {
    return (
      "../../../../images/flags/" +
      annotation.data.name.replace(/\s/, "").toLowerCase() +
      ".gif"
    );
  };

  customizeAnnotation = (annotationItem) => {
    if (annotationItem.data.name === "Illinois") {
      annotationItem.offsetY = -80;
      annotationItem.offsetX = -100;
    }

    return annotationItem;
  };
}

@NgModule({
  imports: [BrowserModule, DxVectorMapModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);