import React, { Component } from "react";
import { View, Text, TouchableOpacity, RefreshControl, ActivityIndicator } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme';
import styles from './indexStyle';
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import CButton from "../../Components/Button";
import Actions from 'App/Stores/TrackItem/Actions';
import { SwipeListView } from 'react-native-swipe-list-view';
class HomeScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            isRefreshing: false,
            loadMore: false,
        }
    }
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

    onDeleteItem = (rowData) => {
        this.props.removeItem(rowData.id);
    }

    onRefresh() {
        this.setState({
            isRefreshing: true
        }, () => setTimeout(() => {
            this.setState({
                isRefreshing: false
            })
        }, 2000));
    }

    handleLoadMore = () => {
        this.setState({
            loading: true,
        }, () => setTimeout(() => {
            this.setState({
                loading: false
            })
        }, 2000));
    };

    onItemPressed = (index) => {
        const { navigation } = this.props;
        navigation.navigate("HistoryScreen", { selectedTracker: index })
    }

    render() {
        const { items, navigation } = this.props;
        const { isRefreshing, loading } = this.state;
        return (
            <View style={[Helpers.fill, styles.container]}>
                <View style={[
                    Metrics.verticalMargin,
                    Helpers.fill,
                ]}>
                    <SwipeListView
                        data={items}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => this.onItemPressed(index)}>
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
                                        styles.smallContainer,
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
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                        renderHiddenItem={(rowData, rowMap) => (
                            <View style={styles.rowBack}>
                                <TouchableOpacity
                                    onPress={() => this.onDeleteItem(rowData.item)}
                                    style={[styles.backButton]}
                                >
                                    <Icon name="trash" size={30} color={Colors.white} />
                                </TouchableOpacity>
                            </View>
                        )}
                        leftOpenValue={0}
                        rightOpenValue={-80}
                        onRowOpen={(rowKey, rowMap) => {
                            setTimeout(() => {
                                rowMap[rowKey] && rowMap[rowKey].closeRow()
                            }, 2000)
                        }}
                        refreshControl={
                            <RefreshControl
                                refreshing={isRefreshing}
                                onRefresh={this.onRefresh.bind(this)}
                            />
                        }
                    // onEndReachedThreshold={0.4}
                    // onEndReached={this.handleLoadMore.bind(this)}
                    />
                    {loading && (
                        <View style={{
                            width: '100%',
                            height: '100%'
                        }}>
                            <ActivityIndicator style={{ color: '#000' }} />
                        </View>)
                    }
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
    removeItem: (id) => dispatch(Actions.removeItem(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen)