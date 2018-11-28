import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
    componentDidMount() {
        const { employee } = this.props;
        const employeeKeys = Object.keys(employee);

        employeeKeys.forEach(key => {
            this.props.employeeUpdate({ prop: key, value: employee[key] });
        });
    }
    onButtonPress = () => {
        const { name, phone, shift } = this.props;
        const { employee } = this.props;

        this.props.employeeSave({
            name,
            phone,
            shift,
            id: employee.id
        });
    }

    onTextPress = () => {
        const { phone, shift } = this.props;

        Communications.text(phone, `Your upcoming shift is on ${shift}`);

    }

    render() {
        return (
            <Card>
                <EmployeeForm {...this.props} />
                <CardSection>
                    <Button onPress={this.onButtonPress}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onTextPress}>
                        Text Schedule
                    </Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    const { name, phone, shift } = state.employeeForm;
    return {
        name,
        phone,
        shift
    };
};

export default connect(mapStateToProps, { employeeUpdate, employeeSave })(EmployeeEdit);