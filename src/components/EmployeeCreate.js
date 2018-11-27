import React, { Component } from 'react';
import { Picker, Text, StyleSheet } from 'react-native';
import { Card, CardSection, Input, Button } from '../components/common';
import { employeeUpdate } from '../actions';
import { connect } from 'react-redux';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                        value={this.props.name}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'name', value: text })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                        value={this.props.phone}
                        onChangeText={text => this.props.employeeUpdate({ prop: 'phone', value: text })}
                    />
                </CardSection>
                <CardSection style={{ flexDirection: 'row' }}>
                    <Text style={styles.pickerTextStyle}>Shift</Text>
                    <Picker
                        style={{ flex: 1}}
                        selectedValue={this.props.shift}
                        onValueChange={text => this.props.employeeUpdate({ prop: 'shift', value: text })}
                    >
                        <Picker.Item label="Monday" value="Monday" />
                        <Picker.Item label="Tuesday" value="Tuesday" />
                        <Picker.Item label="Wednesday" value="Wednesday" />
                        <Picker.Item label="Thursday" value="Thursday" />
                        <Picker.Item label="Friday" value="Friday" />
                        <Picker.Item label="Saturday" value="Saturday" />
                        <Picker.Item label="Sunday" value="Sunday" />
                    </Picker>
                </CardSection>
                <CardSection>
                    <Button>Create</Button>
                </CardSection>
            </Card>
        );
    }
}
const styles = StyleSheet.create({
    pickerTextStyle: {
        fontSize: 18,
        paddingLeft: 20
    }
});
const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    };
};
export default connect(mapStateToProps, { employeeUpdate })(EmployeeCreate);