import React, { Component } from 'react';
import Dropdown from './Dropdown';

const dropdownData = {
    title: 'Dropdown title',
    content: [
      {
        contentItem: 'Dropdown Content 1'
      },
      {
        contentItem: 'Dropdown Content 2'
      },
      {
        contentItem: 'Dropdown Content 3'
      }
    ]
  };

class About extends Component {

    // showLiValue = (value) => {
    //     console.log(value);
    // };
    
    render() {
        return (
            <div className="App">
                About
                <Dropdown data={dropdownData}/>
            </div>
        );
    }
}

export default About;
