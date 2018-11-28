import React, { Component } from 'react';
import { Card, CardSection, Button } from './common';
import { connect } from 'react-redux';
import EmployeeForm from './EmployeeForm';
import { employeeUpdate, employeeSave } from '../actions';

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
            id:employee.id
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