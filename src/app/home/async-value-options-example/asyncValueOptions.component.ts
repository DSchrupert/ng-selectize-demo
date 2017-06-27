import {Component, OnInit, ChangeDetectorRef} from '@angular/core';
import {ASYNC_DROPDOWN_CONFIG, DEFAULT_VALUE_TIMEOUT, DEFAULT_OPTIONS_TIMEOUT} from './asyncValueOptions.config';
import {ExampleValues_Frameworks} from '../../selectize.configs';

@Component({
	selector: 'async-value-options-example',
	templateUrl: 'asyncValueOptions.component.html'
})
export class AsyncValueOptionsComponent implements OnInit {

	asyncOptionsConfig = ASYNC_DROPDOWN_CONFIG;
	asyncOptions: any[];
	currentValue: string[];

	asyncValueConfig = ASYNC_DROPDOWN_CONFIG;
	asyncValueOptions = ExampleValues_Frameworks.slice(0);
	asyncValueValue = ['angular'];

	valueTimeout: number = DEFAULT_VALUE_TIMEOUT;
	optionsTimeout: number = DEFAULT_OPTIONS_TIMEOUT;

	constructor(private cdr: ChangeDetectorRef) {
	}

	ngOnInit() {
		this.setValue();
		this.setOptions();
	}

	setValue() {
		this.currentValue = null;
		console.log(`Setting currentValue in ${this.valueTimeout} second(s).`);
		setTimeout(() => {
			this.currentValue = this.asyncValueValue;
		}, (this.valueTimeout || DEFAULT_VALUE_TIMEOUT) * 1000);
	}

	setOptions() {
		this.asyncOptions = null;
		this.cdr.detectChanges();
		console.log(`Setting options in ${this.optionsTimeout} second(s).`);
		setTimeout(() => {
			this.asyncOptions = ExampleValues_Frameworks.slice(0);
		}, (this.optionsTimeout || DEFAULT_OPTIONS_TIMEOUT) * 1000);
	}

	executeScenario() {
		this.setValue();
		this.setOptions();
	}

	setConfig() {
		// this.asyncOptionsConfig = null;
		// Fixme -> async options apparently doesn't work right now.
		// setTimeout(() => {
		// 	this.asyncOptionsConfig = ASYNC_DROPDOWN_CONFIG;
		// 	console.log("async config set.");
		// }, 5000); // after x milliseconds, set config.
	}
}
