import font from './font'
import color from './color'
import metrics from './metrics'

// This file is for a reusable grouping of Theme items.
// Similar to an XML fragment layout in Android

const ApplicationStyles = {
	screen: {
		mainContainer: {
			flex: 1,
			backgroundColor: color.veryLight
		},
		container: {
			flex: 1,
			padding: metrics.baseMargin,
			backgroundColor: color.veryLight,
			alignItems: 'center',
			justifyContent: 'center',
		},
		mainText: {
			...font.style.h1,
			color: color.dark
		}
	}
}

export default ApplicationStyles
