import React, { Component, useState } from "react";
import styled from "styled-components";

const CustomElement = styled.div`
  color: green;
  font-size: 30px;
`;

const BlueElement = styled(CustomElement)`
  color: blue;
`;

const ButtonElement = styled.button`
  display: inline-block;
  width: 150px;
  height: 30px;
  border: 1px solid yellow;
  border-radius: 10px;
  background-color: ${(props) =>
    props.theme === "success"
      ? "#00ff00"
      : props.theme === "danger"
      ? "#ff0000"
      : "#eb7805"};
`;

const theme = {
  blue: {
    default: "#69f0ae",
    hover: "#00bfa5",
  },
  pink: {
    default: "#ff80ab",
    hover: "#ad1457",
  },
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  padding: 5px 15px;
  border-radius: 5px;
  outline: none;
  text-transform: uppercase;
  cursor: pointer;
  margin: 10px 0px;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

const Tab = styled.button`
  padding: 10px 60px;
  opacity: 0.6;
  cursor: pointer;
  background: #fff;
  border: 0;
  outline: 0;
  border-bottom: 2px solid transparent;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    `
    border-bottom: 2px solid black;
    opacity: 1;
  `}
`;

Button.defaultProps = {
  theme: "blue",
};

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1
  `}
`;

const types = ["home", "work", "street"];

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      <h3>Button group</h3>
      {types.map((type) => {
        return (
          <ButtonToggle
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </ButtonToggle>
        );
      })}
    </div>
  );
}

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      <h3>Tab group</h3>
      {types.map((type) => (
        <Tab
          key={type}
          active={active === type}
          onClick={() => setActive(type)}
        >
          {type}
        </Tab>
      ))}
      <br />
      <p>Your favourite place: {active}</p>
    </div>
  );
}

export default class StyledComponents extends Component {
  clickMe() {
    alert("jj");
  }

  render() {
    return (
      <div>
        <CustomElement>Assalomu alaykum!</CustomElement>
        <BlueElement>Va alaykum assalom!!!</BlueElement>
        <ButtonElement theme="danger">Button</ButtonElement>
        <Button onClick={this.clickMe.bind(this)}>Button</Button>
        <Button theme="pink">Pink theme</Button>
        <Button disabled onClick={this.clickMe.bind(this)}>
          button disabled
        </Button>
        <a href="https://www.youtube.com/watch?v=gP8nQVlrwc0" target="_blank">
          <Button>button in the a tag</Button>
        </a>
        <ToggleGroup />
        <TabGroup />
      </div>
    );
  }
}
