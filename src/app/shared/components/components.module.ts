import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { DetailedWeatherComponent } from './detailed-weather/detailed-weather.component';
import { CitiesTypeahedComponent } from './cities-typeahed/cities-typeahed.component';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    LoaderComponent,
    DetailedWeatherComponent,
    CitiesTypeahedComponent,
  ],
  exports: [
    LoaderComponent,
    DetailedWeatherComponent,
  ]
})
export class ComponentsModule {
}