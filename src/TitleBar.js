import React, { Component, PropTypes } from 'react';
import { OS } from './Desktop';
import TitleBarOX from './TitleBar/TitleBar.osx';
import TitleBarWindows from './TitleBar/TitleBar.windows';

class TitleBar extends Component {
  static propTypes = {
    children: PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.element, React.PropTypes.array]),
    style: PropTypes.object,
    title: PropTypes.string,
    controls: PropTypes.bool,
    onClosePress: PropTypes.func,
    onMinimizePress: PropTypes.func,
    onMaximizePress: PropTypes.func,
    onResizePress: PropTypes.func,
    visible: PropTypes.bool,
    display: PropTypes.bool
  };

  render() {
    if (OS === 'win') {
      return <TitleBarWindows {...this.props}/>
    } else {
      return <TitleBarOX {...this.props}/>
    }
  }
}

export default TitleBar;
