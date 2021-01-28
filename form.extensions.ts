import {
  AbstractControl,
  FormArray,
  FormControl,
  FormGroup
} from "@angular/forms";

export function cloneAbstractControl<T extends AbstractControl>(control: T): T {
  let newControl: T;

  if (control instanceof FormGroup) {
    const controls = control.controls;
    const clonedControls: { [key: string]: AbstractControl } = {};
    Object.keys(controls).forEach(key => {
      clonedControls[key] = cloneAbstractControl(controls[key]);
    });
    const formGroup = new FormGroup(
      clonedControls,
      control.validator,
      control.asyncValidator
    );
    newControl = formGroup as any;
  } else if (control instanceof FormArray) {
    const formArray = new FormArray(
      [],
      control.validator,
      control.asyncValidator
    );
    control.controls.forEach(formControl =>
      formArray.push(cloneAbstractControl(formControl))
    );
    newControl = formArray as any;
  } else if (control instanceof FormControl) {
    newControl = new FormControl(
      control.value,
      control.validator,
      control.asyncValidator
    ) as any;
  } else {
    throw new Error("Error: unexpected control value");
  }

  if (control.disabled) newControl.disable({ emitEvent: false });

  return newControl;
}
