import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {DynamicOptionsComponent} from "./home/dynamic-options-example/dynamicOptions.component";
import {FormExampleComponent} from "./home/form-example/formExample.component";
import {MultiSelectExampleComponent} from "./home/multi-select-example/multiSelectExample.component";
import {PlaceholderStateExampleComponent} from "./home/placeholder-state-example/placeholderStateExample.component";
import {PresetValueExampleComponent} from "./home/preset-value-example/presetValueExample.component";
import {StateToggleExampleComponent} from "./home/state-toggle-example/stateToggleExample.component";
import {AsyncValueOptionsComponent} from "./home/async-value-options-example/asyncValueOptions.component";

import {NgSelectizeModule} from 'ng-selectize';
import {CreateValuesExampleComponent} from "./home/create-values-example/create-values-example.component";

@NgModule({
	declarations: [
		AppComponent,
		HomeComponent,
		DynamicOptionsComponent,
		FormExampleComponent,
		MultiSelectExampleComponent,
		PlaceholderStateExampleComponent,
		PresetValueExampleComponent,
		StateToggleExampleComponent,
		AsyncValueOptionsComponent,
		CreateValuesExampleComponent
	],
	imports: [
		BrowserModule,
		FormsModule,
		ReactiveFormsModule,
		HttpModule,
		RouterModule.forRoot([
			{path: 'wip', component: AsyncValueOptionsComponent}, // just for tracing into NgSelectize, i want it to be the only thing on the page.
			{path: '', component: HomeComponent}
		]),
		NgSelectizeModule // Import the ng-selectize module.
	],
	bootstrap: [AppComponent]
})
export class AppModule {}


