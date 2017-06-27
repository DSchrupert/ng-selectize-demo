import {Component, OnInit} from '@angular/core';
import {ExampleValues_Frameworks} from '../../selectize.configs';
import {REMOVE_OPTIONS_CONFIG, CURRENT_OPTIONS_CONFIG, ADD_OPTIONS_CONFIG} from './dynamicOptions.config';

import {differenceWith, intersectionWith} from 'lodash'

@Component({
	selector: 'dynamic-options-example',
	templateUrl: './dynamicOptions.component.html'
})
export class DynamicOptionsComponent implements OnInit {

	currentOptions: any;
	currentOptionsConfig = CURRENT_OPTIONS_CONFIG;
	value: string[];

	removeOptions: any = this.currentOptions;
	removeOptionsConfig = REMOVE_OPTIONS_CONFIG;
	removeOptionsValue: string[];

	addOptions: any = [];
	addOptionsConfig = ADD_OPTIONS_CONFIG;
	addOptionsValue: string[];

	constructor() {
	}

	ngOnInit(): void {
		this.currentOptions = ExampleValues_Frameworks.slice(0);
		this.refreshRemoveAndAddOptions();
	}

	removeSelectedOption() {
		this.currentOptions = differenceWith(this.currentOptions, this.removeOptionsValue, (oldValue: any, selectedValue: any) => {
			return oldValue[this.currentOptionsConfig.valueField] === selectedValue;
		});
		this.refreshRemoveAndAddOptions();
	}

	addSelectedOptions() {
		if (this.addOptionsValue && this.addOptionsValue.length > 0) {
			const optionsToAdd = intersectionWith(this.addOptions, this.addOptionsValue, (option: any, value: any) => {
				return option[this.addOptionsConfig.valueField] === value;
			});
			if (optionsToAdd && optionsToAdd.length > 0) {
				optionsToAdd.forEach((option: any) => {
					this.currentOptions.push(option);
				});
			}
			this.refreshRemoveAndAddOptions();
		}
	}

	refreshRemoveAndAddOptions() {
		this.removeOptions = this.currentOptions;

		this.addOptions = differenceWith(ExampleValues_Frameworks, this.removeOptions, (allValue: any, removedValue: any) => {
			return allValue[this.currentOptionsConfig.valueField] === removedValue[this.removeOptionsConfig.valueField];
		});
	}
}
