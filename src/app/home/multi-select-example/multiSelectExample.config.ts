import {DEFAULT_DROPDOWN_CONFIG} from '../../selectize.configs';

export const MULTI_SELECT_CONFIG: any = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	maxItems: 5
});
