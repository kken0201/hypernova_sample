import Hypernova, { renderReact } from 'hypernova-react';
import React, { Component, PropTypes } from 'react';

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node,
    onRequestClose: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      isActive: true,
    };
  }

  // こちらは呼ばれる
  componentWillMount() {
    // 特になし
  }

  // SSR時には呼ばれないライフサイクルメソッド
  componentDidMount() {
    this.timer = setTimeout(this.handleClose, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.timer);
    this.timer = null;
  }

  handleClose() {
    const { onRequestClose } = this.props;

    if (typeof onRequestClose === 'function') {
      onRequestClose();
    }
    this.setState({ isActive: false });
  }

  render() {
    if (this.state.isActive) {
      return (
        <div className="modal">
          <button className="modal__close" onClick={this.handleClose}>
            Close!
          </button>
          <div className="modal__body">
            <p>もーだるのなかみ</p>
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return false;
    }
  }
}

module.exports = renderReact('Modal.js', Modal);
