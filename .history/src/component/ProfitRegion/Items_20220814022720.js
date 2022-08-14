import React from "react";

// Constants

const KEYCODE = Object.freeze({
  up: 38,
  down: 40,
  enter: 13,
  tab: 9,
});

// Seed data

const data = [
  {
    id: "1",
    value: 1,
    displayText: "Option 1",
    color: "green",
  },
  {
    id: "2",
    value: 2,
    displayText: "Option 2 - I am some super long option text though",
    color: "blue",
  },
  {
    id: "3",
    value: 3,
    displayText: "Option 3",
    color: "orange",
  },
  {
    id: "4",
    value: 4,
    displayText: "Option 4",
    color: "red",
  },
];

/**
 * Borrowed `ClickOutside` from my old CM code
 */
class ClickOutside extends React.Component {
  constructor(props) {
    super(props);
    this.invokeCallback = this.invokeCallback.bind(this);
    this.preventClose = this.preventClose.bind(this);
  }

  componentDidMount() {
    this.bindEvents();
  }

  componentWillUnmount() {
    this.unbindEvents();
  }

  bindEvents() {
    window.addEventListener("mousedown", this.invokeCallback, false);
    window.addEventListener("touchstart", this.invokeCallback, false);
  }

  unbindEvents() {
    window.removeEventListener("mousedown", this.invokeCallback);
    window.removeEventListener("touchstart", this.invokeCallback);
  }

  invokeCallback(e) {
    const { callback, excludeId } = this.props;

    if (e.target && e.target.id !== excludeId) {
      callback();
    }
  }

  preventClose(e) {
    e.stopPropagation();
  }

  render() {
    const { children } = this.props;

    return (
      <div
        className="c-click-outside"
        onMouseDown={this.preventClose}
        onTouchStart={this.preventClose}
        role="presentation"
      >
        {children}
      </div>
    );
  }
}

// Dumb / presentational components

const StatusIcon = ({ color }) => (
  <span
    aria-hidden="true"
    className={`c-status-icon ${color ? `c-status-icon--${color}` : ""}`}
  />
);

const Trigger = ({
  displayText = "Please select",
  color,
  value,
  controls,
  isDropdownOpen,
  isFocused,
  ...props
}) => {
  // Adds a ref to expose the native DOM `.focus()` method when required
  const ref = {
    ref: isFocused
      ? (button) => {
          if (isFocused && button) button.focus();
        }
      : null,
  };

  return (
    <button
      {...ref}
      {...props}
      aria-controls={controls}
      aria-expanded={isDropdownOpen}
      className="c-dropdown-select__trigger"
    >
      <span className="c-dropdown-select__trigger-inner">
        <StatusIcon color={color} />
        <span className="c-dropdown-select__option-text">{displayText}</span>
      </span>
    </button>
  );
};

const Option = ({ isHighlighted, color, displayText, ...props }) => (
  <li
    {...props}
    aria-selected={isHighlighted ? true : null}
    className={`c-dropdown-select__option ${isHighlighted ? "is-active" : ""}`}
    role="option"
  >
    <StatusIcon color={color} />
    <span className="c-dropdown-select__option-text">{displayText}</span>
  </li>
);

const Dropdown = ({ activeId, handleClick, highlightedIndex, id, options }) => (
  <ul
    aria-activedescendant={activeId}
    className="c-dropdown-select__dropdown"
    id={id}
    role="listbox"
    tabindex="0"
  >
    {options.map((item, i) => (
      <Option
        {...item}
        isHighlighted={highlightedIndex === i}
        onClick={handleClick}
      />
    ))}
  </ul>
);

// Smart components

class Items extends React.Component {
  constructor(props) {
    super();
    this.state = {
      isDropdownOpen: false,
      selectedOption: {},
      highlightedIndex: 0,
      returnFocus: false,
    };
    this.handleUpKey = this.handleUpKey.bind(this);
    this.handleTrigger = this.handleTrigger.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handleDownKey = this.handleDownKey.bind(this);
    this.handleEnterKey = this.handleEnterKey.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.closeDropdown = this.closeDropdown.bind(this);
  }

  handleUpKey() {
    const idx = this.state.highlightedIndex;
    this.setState({
      highlightedIndex: idx === 0 ? 0 : idx - 1,
    });
  }

  handleTrigger() {
    this.setState({
      isDropdownOpen: !this.state.isDropdownOpen,
      highlightedIndex: 0,
    });
  }

  handleSelect(e) {
    const { appData } = this.props;
    const id = e.target.id;
    const selectedOption = appData.filter((item) => item.id === id)[0];
    this.setState({
      selectedOption,
      isDropdownOpen: false,
      returnFocus: true,
    });
  }

  closeDropdown() {
    this.setState({
      isDropdownOpen: false,
      highlightedIndex: 0,
    });
  }

  handleDownKey() {
    const { appData } = this.props;
    const idx = this.state.highlightedIndex;
    const max = appData.length - 1;
    this.setState({
      highlightedIndex: idx === max ? max : idx + 1,
    });
  }

  handleEnterKey(e) {
    if (this.state.isDropdownOpen) {
      e.preventDefault();
      const { appData } = this.props;
      this.setState({
        selectedOption: appData[this.state.highlightedIndex],
        isDropdownOpen: false,
        highlightedIndex: 0,
      });
    }
  }

  handleKeyDown(e) {
    const keyMap = {
      [KEYCODE.down]: this.handleDownKey,
      [KEYCODE.enter]: (evt) => this.handleEnterKey(evt),
      [KEYCODE.up]: this.handleUpKey,
      [KEYCODE.tab]: this.closeDropdown,
    };

    if (keyMap[e.keyCode]) {
      keyMap[e.keyCode](e);
    }
  }

  render() {
    const { highlightedIndex, isDropdownOpen, selectedOption, returnFocus } =
      this.state;
    const { appData, id } = this.props;

    return (
      <ClickOutside callback={this.closeDropdown}>
        <div className="c-dropdown-select">
          <Trigger
            {...selectedOption}
            controls={id}
            isDropdownOpen={isDropdownOpen}
            isFocused={returnFocus}
            onClick={this.handleTrigger}
            onKeyDown={this.handleKeyDown}
          />
          {isDropdownOpen ? (
            <Dropdown
              activeId={appData[highlightedIndex].id}
              handleClick={this.handleSelect}
              highlightedIndex={highlightedIndex}
              id={id}
              options={appData}
            />
          ) : null}
        </div>
      </ClickOutside>
    );
  }
}
export default Items;
