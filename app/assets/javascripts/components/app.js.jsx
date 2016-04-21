import React from 'react';
import getMuiTheme from 'material-ui/lib/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/lib/MuiThemeProvider';
import MyAwesomeReactComponent from './my_awesome_react_component';

export default class App extends React.Component {

  render() {
    return (
      <MuiThemeProvider muiTheme={getMuiTheme()}>
        <MyAwesomeReactComponent />
      </MuiThemeProvider>
    );
  }
  
}
