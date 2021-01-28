import { Component, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";

import { DialogComponent } from "@syncfusion/ej2-angular-popups";
import { cloneAbstractControl } from "./form.extensions";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"]
})
export class AppComponent {
  form = this.formBuilder.group({
    clone: [false],
    radio: this.formBuilder.group({
      value: [true]
    }),
    other: ['unused']
  });

  radioDialogForm: FormGroup;

  @ViewChild("radioDialog") radioDialog: DialogComponent;

  constructor(private formBuilder: FormBuilder) {}

  showRadioDialog() {
    const form = cloneAbstractControl(this.form.get('radio')) as FormGroup;
    this.openRadioDialog(form);
  }

  openRadioDialog(form: FormGroup) {
    if (!this.radioDialog) return;
    this.radioDialogForm = form;
    this.radioDialog.show();
  }

  closeRadioDialog() {
    if (this.radioDialog?.visible === true) { 
      this.radioDialog.hide(); 
    }
    let form = this.radioDialogForm;
    if (this.form.get('clone').value) {
      console.log('cloning radioDialogForm');
      form = cloneAbstractControl(form);
    }
    this.form.setControl("radio", form);
    this.radioDialogForm = null;
  }

  resetRadio() {
    const radio = this.form.get('radio') as FormGroup;
    radio.reset({ value: true });
  }
}
