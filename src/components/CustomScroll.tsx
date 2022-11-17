import React, { Component } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import { Theme } from "constants/themeMode";
import { colors } from "themes/colors";
import { ICustomScroll } from "types";

const { DARK } = Theme;

const { bgcScrollDark, bgcScrollLight } = colors;

export class CustomScroll extends Component<ICustomScroll> {
  constructor(props: ICustomScroll) {
    super(props);
    this.renderThumb = this.renderThumb.bind(this);
  }

  renderThumb() {
    const thumbStyle = {
      backgroundColor:
        this.props.theme === DARK ? bgcScrollDark : bgcScrollLight,
      borderRadius: "5px",
    };

    return <div style={{ ...thumbStyle }} />;
  }

  render() {
    return (
      <Scrollbars
        autoHide
        autoHideDuration={0.5}
        renderThumbVertical={this.renderThumb}
        {...this.props}
      />
    );
  }
}
