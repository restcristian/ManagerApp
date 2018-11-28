import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { employeesFetch } from '../actions';
import { connect } from 'react-redux';

class EmployeeList extends Component {

    componentDidMount() {
        this.props.employeesFetch();
    }
    render() {
        return (
            <View>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
                <Text>Employee List</Text>
            </View>

        );
    }
}

const mapStateToProps = state => {

};

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
