import {DEFAULT_DROPDOWN_CONFIG} from "../../selectize.configs";

export const MULTI_SELECT_CONFIG:Selectize.IOptions<any, any> = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	labelField: 'label',
	valueField: 'value',
	maxItems: 5
});
