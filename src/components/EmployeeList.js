import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import { connect } from 'react-redux';

class EmployeeList extends Component {

    componentDidMount() {
        this.props.employeesFetch();
    }
    getEmployeeList() {

    }
    renderEmployee = ({ item }) => {
        return <Text>Hello Employee</Text>;
    }
    
    render() {
        // console.log('employeeprops', this.props.employees)
        return (
            <FlatList
                data={this.props.employees}
                renderItem={this.renderEmployee}
                keyExtractor={item => item.id}
            />


        );
    }
}

const mapStateToProps = (state) => {

    const { employees } = state;
    const keys = Object.keys(employees);

    let employeeList = [];

    keys.forEach(id => {
        const tempEmployee = {
            id: id,
            ...employees[id]
        };
        employeeList.push(tempEmployee);
    });

    return {
        employees: employeeList
    };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
