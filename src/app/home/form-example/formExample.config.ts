import {Validators, AbstractControl} from '@angular/forms';
import {DEFAULT_DROPDOWN_CONFIG} from '../../selectize.configs';

export const startWithR = (control: AbstractControl): any => {
	return control.value && control.value.toLowerCase().startsWith('r') ? null : {doesntStartWithR: true};
};

export const FORM_GROUP_EXAMPLE = {
	requiredDropdownExample: ['angular', Validators.compose([Validators.required])],
	firstName: ['', Validators.required],
	lastName: ['', Validators.required]
};

export const REQUIRED_DROPDOWN_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	maxItems: 2
});
