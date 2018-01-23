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

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      value: '',
    }
  }

  initialInputStyles = () => ({
    placeholderTop: spring(14),
    placeholderFontSize: spring(16),
    inputBorderWidth: spring(0),
  });

  finalInputStyles = () => ({
    placeholderTop: spring(-20),
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
    const { placeholder, error } = this.props;
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
                className={`input-placeholder ${error && 'error'}`}
              >{placeholder}</span>
              <input
                className={error && "error"}
                type="text"
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
          .input-box > input[type] {
            display: block;
            box-sizing: border-box;
            padding: 0.875em 0.5em;
            background: #f7f7f7;
            border: none;
            outline: none;
            font-family: "Courier New", courier, monospace;
            font-weight: 400;
            font-size: 1em;
            color: #333;
            width: 100%;
          }
          .input-box > input[type].error {
            background: rgba(211, 47, 47, 0.2);
          }
          .input-placeholder {
            display: block;
            font-family: "Gotham SSm A", "Gotham SSm B";
            font-weight: 300;
            color: #888;
            pointer-events: none;
            padding-left: 0.5rem;
          }
          .input-placeholder.error {
           color: #d32f2f;
          }
        `}</style>
      </div>
    );
  }
}

export default Input;
