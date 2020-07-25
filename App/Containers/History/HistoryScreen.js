import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback, Dimensions, TouchableOpacity, FlatList } from "react-native";
import { Helpers, Metrics, Fonts, Colors } from 'App/Theme';
import styles from './indexStyle';
import moment from 'moment-timezone';
import { getTimeZone } from "react-native-localize";
import { normal, tiny } from 'App/Theme/Metrics';
import LineChartWithTooltips from "../../Components/ChartToolTip";
import Icon from 'react-native-vector-icons/FontAwesome';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
class HistoryScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            last7days: [],
            selectedDate: 0,
            modalVisible: false,
            selectedTracker: 0,
        }
    }
    componentDidMount() {
        // Get last 7 days
        this.getLast7Days();
    }

    getLast7Days = () => {
        let start = moment().tz(getTimeZone()).subtract(6, 'days').startOf('day');
        let end = moment().tz(getTimeZone()).format('YYYY-MM-DD');
        let dateRange = [];
        while (start.isSameOrBefore(end)) {
            dateRange.push({
                date: start.format('DD'),
                dayOfWeek: start.format('ddd')
            });
            start = start.add(1, 'day');
        }
        this.setState({
            last7days: dateRange,
            selectedDate: dateRange.length - 1
        });
    }

    onChangeDate = (i) => {
        this.setState({
            selectedDate: i
        });
    }
    onSelectTracker = () => {
        this.setState({
            modalVisible: true
        });
    }

    onHideModal = () => {
        this.setState({
            modalVisible: false
        });
    }

    onChangeSelect = (index) => {
        this.setState({
            selectedTracker: index,
            modalVisible: false
        });
    }
    render() {
        const { items } = this.props;
        const { last7days, selectedDate, modalVisible, selectedTracker } = this.state;
        return (
            <View style={[
                Helpers.fill,
                Metrics.verticalPadding,
                Metrics.horizontalPadding,
                styles.container]}>
                <View>
                    <Text style={[Fonts.h5]}>Your Stats</Text>
                    <TouchableOpacity
                        onPress={this.onSelectTracker}
                        style={[styles.selectContainer]}>
                        <Text style={[Fonts.normal]}>{items.length > 0 ? items[selectedTracker].title : 'Select a tracker'}</Text>
                        <Icon name="chevron-down" size={20} color={Colors.text} />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={[
                        styles.subText,
                        Metrics.topMargin,
                        Metrics.tinyBottomMargin,
                    ]}>RANGE</Text>
                </View>
                <View style={[styles.dateRangeContainer]}>
                    {last7days.map((v, i) => (
                        <TouchableWithoutFeedback
                            key={i}
                            onPress={() => this.onChangeDate(i)}>
                            <View style={[
                                styles.dateContainer(selectedDate === i),
                            ]}>
                                <Text
                                    style={[styles.dateText(selectedDate === i)]}
                                >{v.date}</Text>
                                <Text
                                    style={[styles.dateText(selectedDate === i)]}
                                >{v.dayOfWeek}</Text>
                                {last7days.length - 1 === i &&
                                    <View style={[styles.circle]}></View>}
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
                <View>
                    <LineChartWithTooltips
                        data={{
                            labels: ["12 AM", "1", "2", "3", "4", "5", "6", '7', '8', '9', '10', '11', '12 PM', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'],
                            datasets: [
                                {
                                    data: [
                                        0, 2, 3, 4, 5, 6, 0, 8, 9, 10, 11, 12, 13, 14, 0, 16, 17, 18, 19, 20, 21, 22, 23, 24
                                    ]
                                }
                            ]
                        }}
                        width={Dimensions.get("window").width - (normal * 2)} // from react-native
                        height={300}
                        chartConfig={{
                            decimalPlaces: 0, // optional, defaults to 2dp
                            color: (opacity = 1) => !opacity ? Colors.transparent : Colors.activeTint,
                            labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                            propsForDots: {
                                r: "6",
                            }
                        }}
                        style={{
                            ...Metrics.verticalMargin,
                            ...Metrics.verticalPadding,
                        }}
                        fromZero={true}
                        withShadow={true}
                        withVerticalLines={false}
                        withHorizontalLines={false}
                        getDotColor={(dataPoint) => dataPoint > 0 ? Colors.activeTint : Colors.transparent}
                        transparent={true}
                        yLabelsOffset={30}
                        formatXLabel={(xValue) => (xValue == '12 AM' || xValue == '12 PM' || xValue == '6') ? xValue : ''}
                        valueFormatter={(value, index) =>
                            (index > 0 && index < 12) ? `${value} AM` :
                                (index > 12 && index < 24 ? `${value} PM` : value)}
                    />
                </View>
                <Modal
                    isVisible={modalVisible}
                    style={[styles.modalContainer]}
                    onBackdropPress={this.onHideModal}
                >
                    <View style={[styles.modalView]}>
                        <View style={[
                            Metrics.verticalPadding,
                            Metrics.horizontalPadding,
                            Helpers.fill,
                        ]}>
                            <FlatList
                                data={items}
                                renderItem={({ item, index }) => (
                                    <TouchableOpacity
                                        onPress={() => this.onChangeSelect(index)}>
                                        <View style={[
                                            styles.item
                                        ]}>
                                            <Text style={[Fonts.normal]}>{item.title}</Text>
                                        </View>
                                    </TouchableOpacity>
                                )}
                                keyExtractor={(item) => item.id} />

                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}


const mapStateToProps = (state) => ({
    items: state.trackItem.items,
})

const mapDispatchToProps = (dispatch) => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HistoryScreen)