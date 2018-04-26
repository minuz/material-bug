import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { MatDatepickerModule, MatFormFieldModule, MatIconModule, MatInputModule, MatStepperModule } from "@angular/material";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { MaterialStepperComponent } from "./material-stepper/material-stepper.component";


@NgModule({
  declarations: [AppComponent, MaterialStepperComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatStepperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
