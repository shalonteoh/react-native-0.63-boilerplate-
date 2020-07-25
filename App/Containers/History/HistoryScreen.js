import React, { Component } from "react";
import { View, Text, TouchableWithoutFeedback } from "react-native";
import { Helpers, Metrics } from 'App/Theme';
import styles from './indexStyle';
import moment from 'moment-timezone';
import { getTimeZone } from "react-native-localize";
export default class HistoryScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            last7days: [],
            selectedDate: 0,
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
    render() {
        const { last7days, selectedDate } = this.state;
        return (
            <View style={[
                Helpers.fill,
                Metrics.verticalPadding,
                Metrics.horizontalPadding,
                styles.container]}>
                <View style={[styles.dateRangeContainer]}>
                    {last7days.map((v, i) => (
                        <TouchableWithoutFeedback onPress={() => this.onChangeDate(i)}>
                            <View style={[
                                styles.dateContainer(selectedDate === i),
                            ]}>
                                <Text
                                    key={i}
                                    style={[styles.dateText(selectedDate === i)]}
                                >{v.date}</Text>
                                <Text
                                    key={i}
                                    style={[styles.dateText(selectedDate === i)]}
                                >{v.dayOfWeek}</Text>
                                {last7days.length - 1 === i &&
                                    <View style={[styles.circle]}></View>}
                            </View>
                        </TouchableWithoutFeedback>
                    ))}
                </View>
            </View>
        )
    }
}