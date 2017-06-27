import {Component, DoCheck, OnChanges} from '@angular/core';

@Component({
	selector: '[app-root]',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges, DoCheck {
	ngOnChanges() {
		console.log('onChanges');
	}

	ngDoCheck() {
		console.log('doCheck');
	}
}
