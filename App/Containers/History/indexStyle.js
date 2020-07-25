import { StyleSheet } from 'react-native'
import { Colors, Helpers, Metrics, Fonts } from 'App/Theme'

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
    },
    dateRangeContainer: {
        ...Helpers.rowCross,
        ...Helpers.mainSpaceBetween,
    },
    dateContainer: selectedDate => ({
        ...Helpers.center,
        ...Metrics.tinyVerticalPadding,
        ...Metrics.tinyHorizontalPadding,
        ...Metrics.tinyBorderRadius,
        backgroundColor: selectedDate ? Colors.activeTint : Colors.transparent,
    }),
    dateText: selectedDate => ({
        ...Fonts.normal,
        color: selectedDate ? Colors.white : Colors.activeTint,
    }),
    circle: {
        position: 'absolute',
        right: -2,
        top: -2,
        width: 10,
        height: 10,
        backgroundColor: Colors.red,
        borderRadius: 5
    },
})