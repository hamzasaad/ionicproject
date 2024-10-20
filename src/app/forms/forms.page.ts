import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.page.html',
  styleUrls: ['./forms.page.scss'],
})
export class FormsPage implements OnInit {
  form: FormGroup;

  ngOnInit() {
  }
  title: string = 'Understanding Angular Forms';

  description: string = `Forms in Angular allow users to enter data, and Angular helps manage the form state and validation. 
  There are two types of forms: Template-driven and Reactive forms.`;

  whenToUse: string[] = [
    'To collect user input such as login credentials, profile information, or feedback',
    'To manage form validation with ease, ensuring proper data entry',
    'To create forms that are reusable, dynamic, and scalable',
    'To handle complex form logic, such as conditionally showing or hiding fields',
  ];

  howFormsWork: string = `Angular provides two types of forms: Template-driven forms, which are simpler and more suited for basic use cases, 
  and Reactive forms, which offer more control over form state and validation.`;

  codeSnippet: string = `import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class SampleFormComponent {
  myForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted', this.myForm.value);
    }
  }
}`;



constructor(private fb: FormBuilder) {
  this.form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
  });
}

onSubmit() {
  if (this.form.valid) {
    console.log('Form Submitted', this.form.value);
  }
}
}
