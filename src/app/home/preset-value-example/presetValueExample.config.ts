import {DEFAULT_DROPDOWN_CONFIG} from "../../selectize.configs";

export const SINGLE_SELECT_PRESET_VALUE_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	searchField: ['label']
});

export const MULTI_SELECT_PRESET_VALUE_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	searchField: ['label'],
	maxItems: 4
});