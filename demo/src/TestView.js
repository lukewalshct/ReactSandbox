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

const tableData = [
    {
      name: 'John Smith',
      description: 'test guy',
      units: 'mpg',
      value: 32.4,
    },
    {
      name: 'thing 1',
      description: 'Hello world!',
      units: 'mpg',
      value: 84.3,
    },
    {
      name: 'thing 2',
      description: "it's bar",
      units: 'age',
      value: 13,
    },
    {
      name: 'toyota',
      description: 'type of car',
      units: 'mph',
      value: 65,
    },        
    {
      name: 'Tom Brady',
      description: 'GOAT',
      units: 'rings',
      value: 5,
    },      
  ];

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
              <TableHeaderColumn>Units</TableHeaderColumn>
              <TableHeaderColumn>Value</TableHeaderColumn>
            </TableRow>
          </TableHeader>     
            <TableBody>
              { tableData.map( (row, index) => (
                <TableRow key={index}>
                  <TableRowColumn>{index}</TableRowColumn>  
                  <TableRowColumn>{row.name}</TableRowColumn>
                  <TableRowColumn>{row.description}</TableRowColumn>
                  <TableRowColumn>{row.units}</TableRowColumn>
                  <TableRowColumn>{row.value}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody> 
          </Table>
        </MuiThemeProvider>
    );
  };
}

export default TestView;