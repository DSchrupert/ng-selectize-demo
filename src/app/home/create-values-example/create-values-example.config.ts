import {DEFAULT_DROPDOWN_CONFIG} from "../../selectize.configs";


export const CURRENT_OPTIONS_CONFIG = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	create: true,
	labelField: 'label',
	valueField: 'value',
	maxItems: 10
});