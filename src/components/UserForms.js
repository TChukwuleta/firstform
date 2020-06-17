/* eslint-disable default-case */
import React, { Component } from 'react';
import FormUserDetail from './FormUserDetails'

export class UserForms extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        occupation: '',
        city: '',
        bio: '',       
    }

    //Go back to previous step
    prevStep = () => {
        const {step} = this.state;
        this.setState({
            step: step - 1
        })
    }

    //Proceeds to the next step
    nextStep = () => {
        const {step} = this.state;
        this.setState({
            step: step + 1
        })
    }

    //Handle fields change
    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    }

    render() {
        const {step} = this.state;
        const {firstName, lastName, email, occupation, city, bio} = this.state;
        const values = {firstName, lastName, email, occupation, city, bio}

        switch(step) {
            case 1:
                return (
                    <FormUserDetails />
                )
        }
    }
}

export default UserForms
