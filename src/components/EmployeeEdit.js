import React, { Component } from 'react';
import { Card, CardSection, Button, Confirm } from './common';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';
import Communications from 'react-native-communications';

class EmployeeEdit extends Component {
    state = {
        showModal: false
    }
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

    onFirePress = () => {
        this.setState((prevState) => {
            return {
                ...prevState,
                showModal: !prevState.showModal
            };
        });
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
                <CardSection>
                    <Button onPress={this.onFirePress}>
                        Fire Employee
                    </Button>
                </CardSection>
                <Confirm
                    visible={this.state.showModal}

                >
                    Are you sure you want to delete this?
                </Confirm>
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