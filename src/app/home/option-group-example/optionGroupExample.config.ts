import {DEFAULT_DROPDOWN_CONFIG} from '../../selectize.configs';

export const OPTION_GROUP_SELECT_CONFIG: any = Object.assign({}, DEFAULT_DROPDOWN_CONFIG, {
	optgroupField: 'group', // Name of the property to group items by.
	optgroupLabelField: 'label', // Name of the property to render as an option group label.
	labelField: 'label',
	valueField: 'value',
	maxItems: 5
});
