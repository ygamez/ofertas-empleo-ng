import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-seguridad-login',
  templateUrl: './seguridad-login.component.html',
  styleUrls: ['./seguridad-login.component.css']
})
export class SeguridadLoginComponent implements OnInit {
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
      password: ['', Validators.required],
      recordarme: [''],
    });
  }

  public login() {
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
