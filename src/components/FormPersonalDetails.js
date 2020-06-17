import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton'


export class FormPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const {values, handleChange} = this.props
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter Personal Details' />
                    <TextField 
                    hintText='Enter your Occupation'
                    floatingLabelText='Occupation'
                    onChange = {handleChange('occupatin')}
                    defaultValue = {values.occupation}
                    />
                    <br/>
                    <TextField 
                    hintText='Enter your City'
                    floatingLabelText='City'
                    onChange = {handleChange('city')}
                    defaultValue={values.city}
                    />
                    <br/>
                    <TextField 
                    hintText='Enter your Biography'
                    floatingLabelText='Enter your bio'
                    onChange = {handleChange('bio')}
                    defaultValue={values.bio}
                    />
                    <br/>
                    <RaisedButton
                    label='Back'
                    primary={false}
                    style={style.button}
                    onClick={this.back}
                    />
                    <RaisedButton
                    label='Continue'
                    primary={true}
                    style={style.button}
                    onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

const style = {
    button: {
        margin: 15
    }
}

export default FormPersonalDetails
