import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles, Helpers, Metrics } from 'App/Theme'

export default StyleSheet.create({
    item: {
        ...ApplicationStyles.item,
        ...Helpers.rowMain,
        ...Helpers.mainSpaceBetween,
        backgroundColor: Colors.gray,
        borderBottomWidth: 1,
        borderColor: Colors.darkGray,
    },
})