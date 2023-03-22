import { globalCss } from '.';

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		fontFamily: 'Nunito',
	},

	body: {
		'-webkit-font-smoothing': 'antialised',
		backgroundColor: '$gray800',
		color: '$gray100',
		boxSizing: 'border-box',
	},

	'body, input, textarea, button': {
		fontWeight: 400,
	},
});