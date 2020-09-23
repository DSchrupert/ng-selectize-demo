import {Component, OnInit} from '@angular/core';
import {CURRENT_OPTIONS_CONFIG} from './create-values-example.config';

@Component({
	selector: 'create-values-example',
	templateUrl: 'create-values-example.component.html'
})
export class CreateValuesExampleComponent implements OnInit {

	config: any = CURRENT_OPTIONS_CONFIG;
	value: any = [];

	constructor() {
	}

	ngOnInit() {
	}
}
