import {Component, OnInit, Injectable} from '@angular/core';

@Injectable()
export class SportService {
	getSport():Promise<Sport[]> {
		return Promise.resolve(SPORTS);
	}
}

@Component({
	selector: 'test-component',
	templateUrl: 'test-component.component.html'
})
export class TestComponentComponent implements OnInit {
	options: Sport[] = [];
	config: any = {
		labelField: 'name',
		valueField: 'id',
		create: true,
		maxItems: 5,
		plugins: ['dropdown_direction', 'remove_button'],
		dropdownDirection: 'down'
	};
	placeholder: string = 'Search Sports';

	sports:Sport[];

	constructor(private sportService:SportService) {}

	ngOnInit() {
		this.getSports();
	}

	getSports() {
		this.sportService.getSport().then(results => this.options = results);
	}
}

export interface Sport {
	id: number;
	name:string;
}



export const SPORTS = [
	{id: 1, name: 'hockey'}, {id: 2, name: 'baseball'}, {id: 3, name: 'football'}
];