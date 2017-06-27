import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {FORM_GROUP_EXAMPLE, REQUIRED_DROPDOWN_CONFIG} from './formExample.config';
import {ExampleValues_Frameworks} from '../../selectize.configs';

@Component({
	selector: 'form-example',
	templateUrl: './formExample.component.html'
})
export class FormExampleComponent implements OnInit {

	requiredDropdownConfig: any = REQUIRED_DROPDOWN_CONFIG;
	requiredDropdownOptions: any = ExampleValues_Frameworks.slice(0);
	formGroupExample: FormGroup;

	constructor(private formBuilder: FormBuilder) {
	}

	ngOnInit(): void {
		this.formGroupExample = this.formBuilder.group(FORM_GROUP_EXAMPLE);
		console.log(this.formGroupExample.controls['requiredDropdownExample'])
	}

	hasStartsWithRError(): boolean {
		console.log(this.formGroupExample.controls['requiredDropdownExample'].hasError('doesntStartWithR'));
		return true;
	}

	testSetValue(): void {
		this.formGroupExample.controls['requiredDropdownExample'].setValue(['angular', 'reactjs'])
	}

	resetForm() {
		this.formGroupExample.get('requiredDropdownExample').reset('');
		this.formGroupExample.get('firstName').reset('');
		this.formGroupExample.get('lastName').reset('');
	}
}
