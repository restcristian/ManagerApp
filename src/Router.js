import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeScene from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="auth">
                    <Scene key="login" component={LoginForm} title="Please Login" />
                </Scene>
                <Scene key="main">
                    <Scene
                        initial
                        rightTitle="Add"
                        onRight={() => Actions.employeeCreate()}
                        key="employeeList"
                        component={EmployeeScene}
                        title="Employees" />
                    <Scene key="employeeCreate" title="Create Employee" component={EmployeeCreate} />
                    <Scene key = "employeeEdit" component = {EmployeeEdit} title = "Edit Employee" />
                </Scene>
            </Scene>
        </Router>

    );
};

export default RouterComponent;