import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

import {
  ButtonAllModule,
  CheckBoxAllModule,
  RadioButtonAllModule
} from "@syncfusion/ej2-angular-buttons";

import { DialogAllModule } from "@syncfusion/ej2-angular-popups";

import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    ButtonAllModule,
    CheckBoxAllModule,
    CommonModule,
    DialogAllModule,
    RadioButtonAllModule,
    ReactiveFormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
