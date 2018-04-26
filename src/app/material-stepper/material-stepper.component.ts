import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

interface IStep {
  form?: FormGroup;
  label: string;
}

@Component({
  selector: "app-material-stepper",
  templateUrl: "./material-stepper.component.html",
  styleUrls: ["./material-stepper.component.css"]
})
export class MaterialStepperComponent implements OnInit {
  isLinear = false;
  steps: IStep[];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.steps = [
      {
        form: this._formBuilder.group({ ctrl1: ["", Validators.required] }),
        label: "Step 1"
      },
      {
        form: this._formBuilder.group({ ctrl2: ["", Validators.required] }),
        label: "Step 2"
      },
      {
        label: "Step 3"
      },
      {
        form: this._formBuilder.group({ ctrl4: ["", Validators.required] }),
        label: "Step 4"
      },
    ];
  }
}
