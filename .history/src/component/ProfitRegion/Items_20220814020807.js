import React from "react";

const race = [
  { id: 1, name: "Azure Female" },
  { id: 2, name: "Iron Dwarf" },
  { id: 3, name: "Highborn Human" },
  { id: 4, name: "Lowland Human" },
  { id: 5, name: "Mountain Dwarf" },
  { id: 6, name: "Scythian Elf" },
  { id: 7, name: "Woodland Elf" },
];

class Items extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      haveText: "",
    };
  }

  render() {
    const { isOpen, haveText } = this.state;

    return (
      <div
        className={isOpen ? "dropdown active" : "dropdown"}
        onClick={this.handleClick}
      >
        <div className="dropdown__text">
          {!haveText ? "Select Race" : haveText}
        </div>
        {this.itemList(race)}
      </div>
    );
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  handleText = (ev) => {
    this.setState({
      haveText: ev.currentTarget.textContent,
    });
  };

  itemList = (props) => {
    const list = props.map((item) => (
      <div onClick={this.handleText} className="dropdown__item" key={item.id}>
        {item.name}
      </div>
    ));

    return <div className="dropdown__items"> {list} </div>;
  };
}
export default Items;
