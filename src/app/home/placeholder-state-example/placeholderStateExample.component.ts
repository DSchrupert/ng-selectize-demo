import {Component, OnInit} from '@angular/core';
import {ExampleSelectizeOption} from '../../app.types';
import {PLACEHOLDER_STATE_CONFIG} from './placeholderStateExample.config';

@Component({
	selector: 'placeholder-state-example',
	templateUrl: 'placeholderStateExample.component.html'
})
export class PlaceholderStateExampleComponent implements OnInit {

	config: any = PLACEHOLDER_STATE_CONFIG;
	options: any = [];

	hasOptionsPlaceholder = 'Click to select...';
	noOptionsPlaceholder = 'No options available.';

	constructor() {
	}

	ngOnInit() {
	}

	addRandomOption() {
		this.options.push(<ExampleSelectizeOption>{
			label: Math.random().toString(),
			value: Math.random().toString(),
			code: Math.random().toString()
		});
	}

	clearOptions() {
		this.options = [];
	}
}
