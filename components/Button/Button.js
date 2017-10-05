const Button = ({ ...props }) => (
  <button
    onClick={props.onClick}
    className={`yammas-button--square ${props.disabled && 'disabled' }`}>
    {props.children}
    <style jsx>{`
      .yammas-button--square {
        display: block;
        color: #ffffff;
        background: #d32f2f;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0.875em 1.5em;
        font-size: 0.875em;
        font-family: "proxima-soft", sans-serif;
        font-weight: 300;
      }
      .yammas-button--square.disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    `}</style>
  </button>
);

export default Button;