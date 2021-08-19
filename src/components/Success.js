import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';


export class Success extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM HERE IF YOU HAVE A BACKEND//
        this.props.nextStep();
    };
    render() {
        return (
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Success!" />
                            <h1>Thank you For your Submission</h1>
                            <p>You are all done!</p>
                    </React.Fragment>
                </MuiThemeProvider>
        )
    }
}






export default Success;
