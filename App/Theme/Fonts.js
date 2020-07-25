import { StyleSheet } from 'react-native'

const size = {
    h1: 38,
    h2: 34,
    h3: 30,
    h4: 26,
    h5: 22,
    input: 18,
    regular: 17,
    medium: 14,
    small: 12,
}

export default StyleSheet.create({
    h1: {
        fontSize: size.h1,
        fontWeight: '700',
    },
    h2: {
        fontSize: size.h2,
        fontWeight: '700',
    },
    h3: {
        fontSize: size.h3,
        fontWeight: '700',
    },
    h4: {
        fontSize: size.h4,
        fontWeight: '700',
    },
    h5: {
        fontSize: size.h5,
        fontWeight: '700',
    },
    normal: {
        fontSize: size.regular,
    },
})