import {DEFAULT_DROPDOWN_CONFIG} from '../../selectize.configs';

export const CURRENT_OPTIONS_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	searchField: ['label', 'value'],
	maxItems: 10
});

export const REMOVE_OPTIONS_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	searchField: ['label', 'value'],
	maxItems: 10
});

export const ADD_OPTIONS_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	searchField: ['label', 'value'],
	maxItems: 10
});
