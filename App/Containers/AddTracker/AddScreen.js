import React, { Component } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import { Helpers, Metrics, Colors, Fonts } from 'App/Theme';
import styles from './indexStyle';
import { Form } from 'native-base';
import CTextInput from "../../Components/TextInput";
import CPicker from "../../Components/Picker";
import BottomButton from "../../Components/BottomButton";
import Icon from "react-native-vector-icons/FontAwesome";
import Actions from 'App/Stores/TrackItem/Actions';
import { connect } from 'react-redux'


const TYPES = [
    {
        label: 'Plus/Minus',
        value: 1
    },
    {
        label: 'Average',
        value: 2
    },
]

class AddScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            type: undefined,
            title: '',
            titleError: false,
            typeError: false,
        };
    }

    onTitleChange(value: string) {
        const { setParams } = this.props.navigation;
        this.setState({
            title: value,
            titleError: false,
        }, () => setParams({ promptDiscard: this.state.title.trim() || this.state.type !== undefined }));
    }

    onTypeChange(value: string) {
        const { setParams } = this.props.navigation;
        this.setState({
            type: value,
            typeError: false
        }, () => setParams({ promptDiscard: this.state.title.trim() || this.state.type !== undefined }));
    }

    onCreate() {
        const { title, type } = this.state;
        const { addItem } = this.props;
        if (!title.trim() || type === undefined) {
            this.setState({
                titleError: !title.trim(),
                typeError: type === undefined
            });
        } else {
            addItem({
                title: title,
                type: type,
            });
        }
    }
    render() {
        const { type, titleError, typeError } = this.state;
        return (
            <View style={[
                Helpers.fill,
                Metrics.verticalPadding,
                styles.container]}>
                <Form
                    style={[
                        Metrics.horizontalMargin,
                        Metrics.verticalMargin,
                    ]}>
                    <CTextInput
                        title="Title"
                        onValueChange={this.onTitleChange.bind(this)}
                        error={titleError} />
                    <CPicker
                        title="Type"
                        items={TYPES}
                        placeholder="Select type"
                        value={type}
                        onValueChange={this.onTypeChange.bind(this)}
                        error={typeError} />
                </Form>
                <BottomButton
                    itemId={null}
                    onPress={this.onCreate.bind(this)}
                    backgroundColor={Colors.activeTint}
                    textColor={Colors.white}
                    value="Create" />
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => ({
    addItem: (item) => dispatch(Actions.addItem(item)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AddScreen)