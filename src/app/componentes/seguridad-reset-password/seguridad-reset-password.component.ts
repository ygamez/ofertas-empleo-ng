import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-seguridad-reset-password',
  templateUrl: './seguridad-reset-password.component.html',
  styleUrls: ['./seguridad-reset-password.component.css']
})
export class SeguridadResetPasswordComponent implements OnInit {

  public formGroup: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit() {
    this.formGroup.valueChanges.subscribe(val => {
      this.submitted = true;
    });
  }
  private buildForm() {
    this.formGroup = this.formBuilder.group({
      email: ['', [
        Validators.required, Validators.email
      ]],
    });
  }

  public reset() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.formGroup.invalid) {
      return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.formGroup.value, null, 4));
  }
  // convenience getter for easy access to form fields
  get f() { return this.formGroup.controls; }

}
