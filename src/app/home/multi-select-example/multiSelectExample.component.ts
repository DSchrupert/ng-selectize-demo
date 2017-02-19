import {Component, OnInit, ChangeDetectorRef} from "@angular/core";
import {MULTI_SELECT_CONFIG} from "./multiSelectExample.config";
import {ExampleSelectizeOption} from "../../app.types";
import {ExampleValues_Frameworks} from "../../selectize.configs";

@Component({
	selector: 'multi-select-example',
	templateUrl: './multiSelectExample.component.html'
})
export class MultiSelectExampleComponent implements OnInit {

	options: ExampleSelectizeOption[] = ExampleValues_Frameworks.slice(0);
	config: Selectize.IOptions<any, any> = MULTI_SELECT_CONFIG;
	placeholder: string = 'Placeholder...';
	value:string[];

	constructor() {}

	ngOnInit(): void {}

	addRandomOption() {
		const randomValue = Math.random().toString();
		this.options.push(<ExampleSelectizeOption>{
			label: randomValue,
			value: randomValue,
			code: randomValue
		});
	}

	onValueChange($event:any) {
		console.log("Multi select option changed: ", $event);
	}
}