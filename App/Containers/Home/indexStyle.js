import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, ApplicationStyles } from 'App/Theme'

export default StyleSheet.create({
    container: {
        backgroundColor: Colors.primary,
    },
    item: {
        ...Metrics.smallVerticalMargin,
        ...Metrics.tinyBorderRadius,
        ...Metrics.horizontalMargin,
        ...Metrics.verticalMargin,
        backgroundColor: Colors.gray,
        height: 150,
    },
    smallContainer: {
        ...Metrics.horizontalMargin,
        backgroundColor: Colors.gray,
        borderBottomColor: Colors.darkGray,
        borderBottomWidth: 1,
    },
    itemButtonContainer: {
        ...Helpers.fillRowCross,
        backgroundColor: Colors.white,
        height: 50
    },
    rowBack: {
        ...Metrics.smallVerticalMargin,
        ...Metrics.horizontalMargin,
        ...Metrics.verticalMargin,
        ...Helpers.fillRow,
        ...Helpers.crossStart,
        ...Helpers.mainEnd,
    },
    backButton: {
        ...Metrics.tinyTopRightBorderRadius,
        ...Metrics.tinyBottomRightBorderRadius,
        ...Helpers.center,
        backgroundColor: Colors.red,
        height: 100,
        width: 75,
    }
})