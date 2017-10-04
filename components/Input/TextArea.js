import React from 'react';
import { Motion, spring } from 'react-motion';

const Styles = {
  inputBox: {
    position: 'relative',
  },
  inputPlaceholder: {
    position: 'absolute',
    left: 4,
  },
  inputBorder: {
    position: 'aboslute',
    background: '#d32f2f',
    height: 2,
    top: 0,
  }
};

class TextArea extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: '',
    }
  }

  initialInputStyles = () => ({
    placeholderTop: spring(8),
    placeholderFontSize: spring(16),
    inputBorderWidth: spring(0),
  });

  finalInputStyles = () => ({
    placeholderTop: spring(-18),
    placeholderFontSize: spring(12),
    inputBorderWidth: spring('width' in this.props ? this.props.width : 500),    
  });

  onFocus = e => {
    e.preventDefault();
    this.setState({ focused: true })
  }

  onBlur = e => {
    e.preventDefault();
    this.setState({ focused: false })
  }

  onChange = e => {
    e.preventDefault();
    this.setState({ value: e.target.value });
    return this.props.onChange(e);
  }

  render() {
    const { placeholder } = this.props;
    const width = 'width' in this.props ? this.props.width : 500;
    let inputStyles = this.state.value ? this.finalInputStyles() :
      (this.state.focused ? this.finalInputStyles() : this.initialInputStyles());
    return (
      <div>
        <Motion style={inputStyles}>
          {({ ...inputStyles }) =>
            <div style={{...Styles.inputBox, width: width }} className="input-box">
              <span
                style={{ 
                  ...Styles.inputPlaceholder,
                  top: inputStyles.placeholderTop,
                  fontSize: inputStyles.placeholderFontSize,
                }}
                className="input-placeholder"
              >{placeholder}</span>
              <textarea
                onFocus={this.onFocus}
                onBlur={this.onBlur}
                onChange={this.onChange}
              />
              <div style={{...Styles.inputBorder , width: inputStyles.inputBorderWidth}} className="input-border" />
            </div>
          }
        </Motion>
        <style jsx>{`
          .input-box {
            margin-bottom: 32px;
          }
          .input-box > textarea {
            display: block;
            resize: vertical;
            box-sizing: border-box;
            padding: 0.875em 0.5em;
            background: #f7f7f7;
            border: none;
            outline: none;
            font-family: "Courier New", Courier, monospace;
            font-weight: 400;
            font-size: 1em;
            line-height: 1.2;
            color: #333;
            width: 100%;
            min-height: 150px;
          }
          .input-placeholder {
            display: block;
            font-family: "proxima-soft", sans-serif;
            font-weight: 400;
            color: #888;
          }
        `}</style>
      </div>
    );
  }
}

export default TextArea;
