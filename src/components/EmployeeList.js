import React, { Component } from 'react';
import {  Text, FlatList } from 'react-native';
import { employeesFetch } from '../actions';
import { connect } from 'react-redux';
import ListItem from './ListItem';

class EmployeeList extends Component {

    componentDidMount() {
        this.props.employeesFetch();
    }
    getEmployeeList() {

    }
    renderEmployee = ({ item }) => {
        console.log(item);
        // return <Text>hello</Text>
        return <ListItem employee={item} />;
    }

    render() {
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

    let employeeList = keys.map(id => {
        const tempEmployee = {
            id,
            ...employees[id]
        };
        return tempEmployee;

    });

    return {
        employees: employeeList
    };
};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
