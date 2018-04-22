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
  
  onClickLi = (e) => {
    this.props.onClickLi('yoyo');
  };

  render() {
    console.log(this.props.data.content);
    let DropdownContent;
    if (this.state.isOpened) {
      DropdownContent = this.props.data.content.map((item, index)  => {
        return (
            <li key={index} onClick={this.onClickLi} value={item.contentItem}>{item.contentItem}</li>
        )
      });
    }
    return (
      <div className="Dropdown">
        <p onClick={this.toggleClick}>{this.props.data.title}</p>
        <ul>
          { DropdownContent }
        </ul>

      </div>
    );
  }
}

export default Dropdown;
