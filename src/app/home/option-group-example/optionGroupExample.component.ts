import {Component, OnInit} from '@angular/core';
import {OPTION_GROUP_SELECT_CONFIG} from './optionGroupExample.config';
import {ExampleGroup, ExampleGroupableOption} from '../../app.types';
import {ExampleGroups_Colors, ExampleValues_Colors} from '../../selectize.configs';

@Component({
	selector: 'option-group-select-example',
	templateUrl: './optionGroupExample.component.html'
})
export class OptionGroupExampleComponent implements OnInit {

	options: ExampleGroupableOption[] = ExampleValues_Colors.slice(0);
	optgroups: ExampleGroup[] = ExampleGroups_Colors.slice(0);
	config: any = OPTION_GROUP_SELECT_CONFIG;
	placeholder = 'Placeholder...';
	value: string[] = [];

	constructor() {
	}

	ngOnInit(): void {
	}
}
