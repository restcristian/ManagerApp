import React, { Component } from 'react';
import { Card, CardSection, Input, Button } from '../components/common';

class EmployeeCreate extends Component {
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Name"
                        placeholder="Jane"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label="Phone"
                        placeholder="555-555-5555"
                    />
                </CardSection>
                <CardSection></CardSection>
                <CardSectio>
                    <Button>Create</Button>
                </CardSectio>
            </Card>
        );
    }
}

export default EmployeeCreate;