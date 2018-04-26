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
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  steps: IStep[];

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    // this.firstFormGroup = this._formBuilder.group({
    //   firstCtrl: ["", Validators.required]
    // });
    // this.secondFormGroup = this._formBuilder.group({
    //   secondCtrl: ["", Validators.required]
    // });

    this.steps = [
      {
        form: this._formBuilder.group({ ctrl1: ["", Validators.required] }),
        label: "Step 1"
      },
      {
        label: "Step 2"
      },
      {
        form: this._formBuilder.group({ ctrl3: ["", Validators.required] }),
        label: "Step 3"
      }
    ];
  }
}
