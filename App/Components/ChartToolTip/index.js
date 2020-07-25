import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { G, Line } from 'react-native-svg';
import { Dimensions, View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Colors, Metrics, Fonts } from "App/Theme";
import Helpers from '../../Theme/Helpers';

const screenWidth = Dimensions.get('window').width;

const Tooltip = ({ x, y, textX, textY, stroke, pointStroke, position, content }) => {
    let tipW = 136,
        tipH = 50,
        tipX = 5,
        tipY = -9,
        tipTxtX = 12,
        tipTxtY = 6;
    const posY = y;
    const posX = x;

    if (posX > screenWidth - tipW) {
        tipX = -(tipX + tipW);
        tipTxtX = tipTxtX - tipW - 6;
    }

    const boxPosX = posX - (136 / 2);

    return textY != '0' ? (
        <G>
            <Line
                x1={posX}
                y1="0"
                x2={posX}
                y2="240"
                stroke={Colors.darkGray}
                strokeWidth="2" />
        </G>)
        : null;
};

Tooltip.propTypes = {
    x: PropTypes.number,
    y: PropTypes.number,
    height: PropTypes.number,
    stroke: PropTypes.string,
    pointStroke: PropTypes.string,
    textX: PropTypes.string,
    textY: PropTypes.string,
    position: PropTypes.string,
    content: PropTypes.string,
};

Tooltip.defaultProps = {
    position: 'right',
};

const tooltipDecorators = (state, data, valueFormatter) => () => {
    if (state === null) {
        return null;
    }
    const { index, value, x, y } = state;
    const textX = data.labels[index];
    const position = data.labels.length === index + 1 ? 'left' : 'right';
    return (
        <Tooltip
            textX={String(textX)}
            textY={String(value)}
            content={valueFormatter(value, index)}
            x={x}
            y={y}
            stroke={Colors.activeTint}
            pointStroke={Colors.activeTint}
            position={position}
        />
    );
};

const LineChartWithTooltips = ({ valueFormatter, ...props }) => {
    const [state, setState] = useState(null);
    if (state === null) {
        return (
            <View style={{
                height: 450,
                justifyContent: 'center'
            }}>
                <LineChart
                    {...props}
                    decorator={tooltipDecorators(state, props.data, valueFormatter)}
                    onDataPointClick={setState}
                />
            </View >
        );
    }
    const { index, x, value } = state;
    const textX = props.data.labels[index];
    const formattedValue = valueFormatter(textX, index);
    return (
        <View style={{
            height: 450,
            justifyContent: 'center'
        }}>
            {value ? (
                <View style={{
                    ...Metrics.tinyBorderRadius,
                    ...Helpers.mainCenter,
                    ...Metrics.horizontalPadding,
                    position: 'absolute',
                    top: 15,
                    left: (props.data.labels.length - 4 < index + 1) ? x - 100 : ((index < 4) ? x - 20 : x - 60),
                    height: 60,
                    width: 120,
                    backgroundColor: Colors.gray,
                }}>
                    <Text style={[
                        Fonts.normal,
                        {
                            color: Colors.text
                        }
                    ]}><Text style={[Fonts.h5]}>{value}</Text> TIMES</Text>
                    <Text style={[
                        Fonts.normal,
                        {
                            color: Colors.text
                        }
                    ]}>{formattedValue}</Text>
                </View>
            ) : null}
            <LineChart
                {...props}
                decorator={tooltipDecorators(state, props.data, valueFormatter)}
                onDataPointClick={setState}
            />
        </View >
    );
};

LineChartWithTooltips.propTypes = {
    valueFormatter: PropTypes.func,
};

export default LineChartWithTooltips;