import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { List, ListItem } from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        //PROCESS FORM HERE IF YOU HAVE A BACKEND//
        this.props.nextStep();
    };
    render() {
        const { values: { firstName, lastName, email, occupation, city, bio } } = this.props;
        return (
                <MuiThemeProvider>
                    <React.Fragment>
                        <AppBar title="Confirm User Data" />
                        <List>
                            <ListItem 
                                primaryText="First Name" 
                                secondaryText={firstName} />
                            <ListItem 
                                primaryText="Last Name" 
                                secondaryText={lastName} />
                            <ListItem 
                                primaryText="Email" 
                                secondaryText={email} />
                            <ListItem 
                                primaryText="Occupation" 
                                secondaryText={occupation} />
                            <ListItem 
                                primaryText="City" 
                                secondaryText={city} />
                            <ListItem 
                                primaryText="Bio" 
                                secondaryText={bio} />
                        </List>
                        <RaisedButton
                            label="Back"
                            primary={false}
                            style={style.button}
                            onClick={this.back} />
                        <RaisedButton
                            label="Confirm & Continue"
                            primary={true}
                            style={style.button}
                            onClick={this.continue} />
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



export default Confirm;
