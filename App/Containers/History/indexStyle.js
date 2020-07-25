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
    subText: {
        ...Fonts.normal,
        color: Colors.veryDarkGray
    },
    selectContainer: {
        ...Metrics.topMargin,
        ...Metrics.bottomMargin,
        ...Metrics.borderRadius,
        ...Metrics.horizontalPadding,
        ...Helpers.rowCross,
        ...Helpers.mainSpaceBetween,
        height: 50,
        backgroundColor: Colors.gray,
    },
    modalContainer: {
        justifyContent: 'flex-end',
        margin: 0,
    },
    modalView: {
        ...Metrics.borderRadius,
        height: 500,
        backgroundColor: Colors.white,
    },
    item: {
        ...Metrics.tinyVerticalMargin,
        ...Helpers.mainCenter,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: Colors.gray,
    },
})