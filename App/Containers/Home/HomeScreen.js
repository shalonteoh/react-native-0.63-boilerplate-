import React, { Component } from "react";
import { View, Text, FlatList } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme';
import styles from './indexStyle';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import CButton from "../../Components/Button";
import Actions from 'App/Stores/TrackItem/Actions';
class HomeScreen extends Component {

    onIncrement = (id) => {
        const { items, updateItems } = this.props;
        const index = items.findIndex(element => element.id == id);
        let newArray = [...items];
        newArray[index] = {
            ...newArray[index],
            data: {
                ...newArray[index].data,
                value: newArray[index].data.value + 1
            }
        };
        updateItems(newArray);
    }
    onDecrement = (id) => {
        const { items, updateItems } = this.props;
        const index = items.findIndex(element => element.id == id);
        let newArray = [...items];
        newArray[index] = {
            ...newArray[index],
            data: {
                ...newArray[index].data,
                value: newArray[index].data.value - 1
            }
        };
        updateItems(newArray);
    }
    render() {
        const { items } = this.props;
        return (
            <View style={[Helpers.fill, styles.container]}>
                <View style={[
                    Metrics.verticalMargin,
                    Helpers.fill,
                ]}>
                    <FlatList
                        data={items}
                        renderItem={({ item }) => (
                            <View style={[
                                styles.item
                            ]}>
                                <View style={[
                                    Helpers.fillRowCross,
                                    styles.smallContainer
                                ]}>
                                    <Text style={[Fonts.normal]}>{item.title}</Text>
                                </View>
                                <View style={[
                                    Helpers.fillRowCross,
                                    styles.smallContainer
                                ]}>
                                    {item.data && (
                                        <View style={[
                                            Helpers.fillRow,
                                            Helpers.mainSpaceBetween
                                        ]}>
                                            <Text style={[Fonts.normal]}>{item.data.date}</Text>
                                            <Text style={[Fonts.normal]}>{item.data.value}</Text>
                                        </View>)}
                                </View>
                                <View style={[
                                    styles.itemButtonContainer
                                ]}>
                                    <View style={[
                                        Helpers.fillRow,
                                        Helpers.mainEnd,
                                    ]}>
                                        <CButton
                                            itemId={item.id}
                                            onPress={this.onDecrement}
                                            backgroundColor={Colors.white}
                                            borderColor={Colors.activeTint}
                                            blr={5}
                                            width={50}
                                            content={(
                                                <Icon name="minus" size={20} color={Colors.activeTint} />
                                            )}
                                            value="-" />
                                        <CButton
                                            itemId={item.id}
                                            onPress={this.onIncrement}
                                            backgroundColor={Colors.activeTint}
                                            brr={5}
                                            width={50}
                                            content={(
                                                <Icon name="plus" size={20} color={Colors.white} />
                                            )}
                                            value="+" />
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor={item => item.id}
                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    items: state.trackItem.items,
})

const mapDispatchToProps = (dispatch) => ({
    updateItems: (items) => dispatch(Actions.updateItems(items)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)