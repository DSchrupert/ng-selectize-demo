import {Component, OnInit} from "@angular/core";
import {SINGLE_SELECT_PRESET_VALUE_CONFIG, MULTI_SELECT_PRESET_VALUE_CONFIG} from "./presetValueExample.config";
import {ExampleValues_Frameworks} from "../../selectize.configs";

@Component({
    selector: 'preset-value-example',
    templateUrl: 'presetValueExample.component.html'
})
export class PresetValueExampleComponent implements OnInit {

	singleSelectConfig:any = SINGLE_SELECT_PRESET_VALUE_CONFIG;
	singleSelectOptions:any = ExampleValues_Frameworks.slice(0);
	singleSelectValue:string[] = ['reactjs']; // Defaulted value.

	multiSelectConfig:any = MULTI_SELECT_PRESET_VALUE_CONFIG;
	multiSelectOptions:any = ExampleValues_Frameworks.slice(0);
	multiSelectValue:string[] = ['reactjs', 'angular'];

	placeholder:string = 'Click to select...';

    constructor() { }

    ngOnInit() { }

	onValueChange($event:any) {
    	console.log('value change: ', $event);
	}

}