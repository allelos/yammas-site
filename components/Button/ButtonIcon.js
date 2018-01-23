import FontAwesome from 'react-fontawesome';

const ButtonIcon = ({ ...props }) => (
  <button onClick={props.onClick}
    className={`yammas-button--square ${props.disabled && 'disabled' }`}>
    {props.children}
    <div className="yammas-button-icon--square">
      <FontAwesome
        name="paper-plane"
        style={{ color: '#ffffff' }}
      />
    </div>
    <style jsx>{`
      .yammas-button--square {
        box-sizing: border-box;
        display: block;
        color: #ffffff;
        background: #d32f2f;
        border: none;
        outline: none;
        cursor: pointer;
        padding: 0.875em 1em;
        font-size: 0.875em;
        font-family: "Gotham SSm A", "Gotham SSm B";
        font-weight: 400;
      }
      .yammas-button--square.disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
      .yammas-button-icon--square {
        display: inline;
        margin-left: 0.5em;
      }
    `}</style>
  </button>
);

export default ButtonIcon;