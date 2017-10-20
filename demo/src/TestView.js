import React from 'react';
import {
    Table,
    TableBody,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class TestView extends React.Component {
  render() {
    return (
        <MuiThemeProvider>
          <Table>
          <TableHeader>
            <TableRow>
              <TableHeaderColumn>ID</TableHeaderColumn>
              <TableHeaderColumn>Name</TableHeaderColumn>
              <TableHeaderColumn>Description</TableHeaderColumn>
              <TableHeaderColumn>Value</TableHeaderColumn>
            </TableRow>
          </TableHeader>     
            <TableBody>
            <TableRow>
              <TableRowColumn>1</TableRowColumn>
              <TableRowColumn>TestName 1</TableRowColumn>
              <TableRowColumn>Description 1!</TableRowColumn>
              <TableRowColumn>23.4</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>2</TableRowColumn>
              <TableRowColumn>Namers</TableRowColumn>
              <TableRowColumn>It's a trap!</TableRowColumn>
              <TableRowColumn>13.4</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>3</TableRowColumn>
              <TableRowColumn>John</TableRowColumn>
              <TableRowColumn>blah de blah</TableRowColumn>
              <TableRowColumn>40</TableRowColumn>
            </TableRow>
            <TableRow>
              <TableRowColumn>4</TableRowColumn>
              <TableRowColumn>Name4</TableRowColumn>
              <TableRowColumn>hello world</TableRowColumn>
              <TableRowColumn>100</TableRowColumn>
            </TableRow>                        
            </TableBody> 
          </Table>
        </MuiThemeProvider>
    );
  };
}

export default TestView;