import React from "react";
import PropTypes from "prop-types";
import jsonp from "jsonp";
import FontAwesome from 'react-fontawesome';

const getAjaxUrl = url => url.replace('/post?', '/post-json?')

class SubscribeForm extends React.Component {
  constructor(props, ...args) {
    super(props, ...args)
    this.state = {
      status: null,
      msg: null
    }
  }
  onSubmit = e => {
    e.preventDefault()
    if (!this.input.value || this.input.value.length < 5 || this.input.value.indexOf("@") === -1) {
      this.setState({
        status: "error"
      })
      return
    }
    const url = getAjaxUrl(this.props.action) + `&EMAIL=${encodeURIComponent(this.input.value)}`;
    this.setState(
      {
        status: "sending",
        msg: null
      }, () => jsonp(url, {
        param: "c"
      }, (err, data) => {
        if (err) {
          this.setState({
            status: 'error',
            msg: err
          })
        } else if (data.result !== 'success') {
          this.setState({
            status: 'error',
            msg: data.msg
          })
        } else {
          this.setState({
            status: 'success',
            msg: data.msg
          })
        }
      })
    )
  }
  render() {
    const { action, messages, className, style, styles } = this.props
    const { status } = this.state
    return (
      <div className="subscribe-form-container" style={style}>
        <form action={action} method="post" noValidate className="subscribe-form">
          <div className="subscribe-form-inner">
            <input
              className={status === "error" ? "input-box-error" : "input-box"}
              ref={node => (this.input = node)}
              type="email"
              defaultValue=""
              name="EMAIL"
              required={true}
              placeholder={'Email...'}
            />
            <button
              className="subscribe-form--button"
              disabled={this.state.status === "sending" || this.state.status === "success"}
              onClick={this.onSubmit}
              type="submit"
            >
              { status === "sending" &&
                <FontAwesome name="circle-o-notch" spin className="button-spinner" />
              }
              { status === "success" &&
                <FontAwesome name="check" style={{ color: '#d32f2f' }}/>
              }
              { status === "error" &&
                <FontAwesome name="times" style={{ color: '#d32f2f' }}/>
              }
              { status !== "success" && status !== "sending" && status !== "error" &&
                "Εγγραφή"
              }
            </button>
          </div>
        </form>
        <style jsx>{`
          .subscribe-form-container {
            display: flex;
            flex: 1;
            justify-content: center;
            align-items: center;
          }
          .subscribe-form {
          }
          .subscribe-form-inner {
            min-width: 100%;
            box-shadow: 0px 6px 6px 0px rgba(0,0,0,0.25);
            border-radius: 32px;
            min-width: 100%;
          }
          .input-box[type="email"] {
            box-sizing: border-box;
            padding: 0.875rem 1rem;
            font-family: "proxima-soft", sans-serif;
            border-top-left-radius: 32px;
            border-bottom-left-radius: 32px;
            border: 1px solid #ccc;
            font-weight: 300;
            font-style: normal;
            font-size: 1rem;
            color: #333;
            background: #fff;
            outline: none;
          }
          .input-box-error[type="email"] {
            box-sizing: border-box;
            padding: 0.875rem 1rem;
            font-family: "proxima-soft", sans-serif;
            border-top-left-radius: 32px;
            border-bottom-left-radius: 32px;
            border: 1px solid #ccc;
            font-weight: 300;
            font-style: normal;
            font-size: 1rem;
            color: #d32f2f;
            outline: none;
          }
          .subscribe-form--button {
            box-sizing: border-box;
            padding: 0.875rem 1.5rem;
            min-width: 120px;
            font-size: 1rem;
            font-family: "proxima-soft", sans-serif;
            font-weight: 500;
            font-style: normal;
            background: #fff;
            color: #d32f2f;
            border: none;
            outline: none;
            border: 1px solid #fff;
            border-top-right-radius: 32px;
            border-bottom-right-radius: 32px;
            cursor: pointer;
          }
          .subscribe-form--button:hover {
            box-shadow: 0px 6px 6px 0px rgba(0,0,0,0.25);
          }
          .subscribe-form--button:active {
            box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.25);
          }
          .button-container {
            display: block;
            position: relative;
            width: 100%;
            height: 100%;
            background: pink;
          }
          .button-spinner {
            color: #d32f2f;
          }
        `}</style>
      </div>
    )
  }
}

SubscribeForm.propTypes = {
  messages: PropTypes.object,
  styles: PropTypes.object
}

SubscribeForm.defaultProps = {
  messages: {
    inputPlaceholder: "Votre email",
    btnLabel: "Envoyer",
    sending: "Envoi en cours...",
    success: "Merci de votre intérêt!<p>Nous devons confirmer votre adresse e-mail. Pour compléter le processus d'abonnement, veuillez cliquer sur le lien contenu dans l'e-mail que nous venons de vous envoyer.</p>",
    error: "Oops, impossible d'enregistrer cette adresse"
  },
  styles: {
    sending: {
      fontSize: 18,
      color: "auto"
    },
    success: {
      fontSize: 18,
      color: "green"
    },
    error: {
      fontSize: 18,
      color: "red"
    }
  }
}

export default SubscribeForm