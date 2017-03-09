import {Component, OnInit} from '@angular/core';
import {STATE_TOGGLE_EXAMPLE_CONFIG} from "./stateToggleExample.config";
import {ExampleValues_Frameworks} from "../../selectize.configs";

@Component({
	selector: 'state-toggle-example',
	templateUrl: 'stateToggleExample.component.html'
})
export class StateToggleExampleComponent implements OnInit {

	isEnabled:boolean = false;
	config:any = STATE_TOGGLE_EXAMPLE_CONFIG;
	options: any = ExampleValues_Frameworks.slice(0);
	value: string;

	constructor() {}

	ngOnInit() {}

	toggleEnabledState() {
		this.isEnabled = !this.isEnabled;
	}
}