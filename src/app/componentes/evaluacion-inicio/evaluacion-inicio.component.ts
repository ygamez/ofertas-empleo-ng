import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-evaluacion-inicio',
  templateUrl: './evaluacion-inicio.component.html',
  styleUrls: ['./evaluacion-inicio.component.css']
})
export class EvaluacionInicioComponent implements OnInit {
  skillsForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.skillsForm = this.fb.group({
      name: '',
      skills: this.fb.array([]) ,
    });
  }

  ngOnInit() {
  }
  get skills(): FormArray {
    return this.skillsForm.get('skills') as FormArray;
  }
  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
    });
  }
  addSkills() {
    this.skills.push(this.newSkill());
  }
  removeSkill(i: number) {
    this.skills.removeAt(i);
  }
  onSubmit() {
    console.log(this.skillsForm.value);
  }
  }
