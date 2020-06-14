import React, { Component, createRef } from "react";
import DropDownItem from "./DropDownItem/DropDownItem";
import Button from "../shared/Button";
import { CSSTransition } from "react-transition-group";
import styles from "./DropDownMenu.module.css";
import slideTransition from "../../transitions/slide.module.css";

export default class Menu extends Component {
  backdropRef = createRef();

  state = {
    isOpen: false,
    color: "white",
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyPress);
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyPress);
    window.removeEventListener("scroll", this.listenScrollEvent);
  }

  listenScrollEvent = (e) => {
    if (window.scrollY > window.outerHeight) {
      this.setState({ color: "black" });
    } else {
      this.setState({ color: "white" });
    }
  };

  handleKeyPress = (e) => {
    if (e.code !== `Escape`) return;

    this.setState({
      isOpen: false,
    });

    // console.log(window);
  };

  toggleDropdown = () => {
    this.setState((state) => ({ isOpen: !state.isOpen }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={styles.backdrop}>
        <div className={styles.container}>
          <Button
            type="button"
            color={this.state.color}
            onClick={this.toggleDropdown}
          >
            &#9776;
          </Button>

          <CSSTransition
            in={isOpen}
            timeout={200}
            classNames={slideTransition}
            unmountOnExit
          >
            <div className={styles.dropdown}>
              <ul className={styles.list}>
                <li>
                  <h4>Header</h4>
                  <DropDownItem category="Header" />
                </li>
                <li>
                  <h4>About Me</h4>
                  <DropDownItem category="About me" />
                </li>
                <li>
                  <h4>Portfolio</h4>
                  <DropDownItem category="Portfolio" />
                </li>
                <li>
                  <h4>Contacts</h4>
                  <DropDownItem category="Contacts" />
                </li>
              </ul>
            </div>
          </CSSTransition>
        </div>
      </div>
    );
  }
}
