import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class TestView extends React.Component {
  render() {
    return (
        <MuiThemeProvider>
          <FlatButton label='TestButton'>
              OK
          </FlatButton>
        </MuiThemeProvider>
    );
  };
}

export default TestView;