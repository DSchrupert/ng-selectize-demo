import {DEFAULT_DROPDOWN_CONFIG} from '../../selectize.configs';

export const ASYNC_DROPDOWN_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	maxItems: 10
});

export const DEFAULT_VALUE_TIMEOUT = 1;
export const DEFAULT_OPTIONS_TIMEOUT = 2;
