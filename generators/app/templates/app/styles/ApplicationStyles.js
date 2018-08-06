import font from './font'
import color from './color'
import metrics from './metrics'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
	screen: {
		container: {
			flex: 1,
			padding: metrics.baseMargin,
			backgroundColor: color.veryLight,
			alignItems: 'center',
			justifyContent: 'center',
		},
		titleText: {
			...font.style.h1,
			color: color.dark
		},
		bodyText: {
			...font.style.regular,
			color: color.medium
		}
	},
	stackNavigatorOptions: {
		headerStyle: {
			backgroundColor: '#ffffff'
		}
	}
}

export default ApplicationStyles
