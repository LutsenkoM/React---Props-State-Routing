import React from 'react';


class Dropdown extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      isOpened: false
    }
  }

  toggleClick = () => {
    this.setState({
      isOpened: !this.state.isOpened
    })
  };

  render() {
    console.log(this.props.data);
    let DropdownContent;
    if (this.state.isOpened) {
      DropdownContent =

        ({
        this.props.data.content[1];
      }
      )




    }


    return (
      <div className="Dropdown">
        <p onClick={this.toggleClick}>{this.props.data.title}</p>
        { DropdownContent }
      </div>
    );
  }
}

export default Dropdown;
