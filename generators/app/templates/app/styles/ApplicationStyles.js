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
			padding: metrics.baseMargin,
		},
		mainText: {
			...font.style.h1,
			color: color.dark
		}
	}
}

export default ApplicationStyles
