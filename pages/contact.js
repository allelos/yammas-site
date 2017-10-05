import Link from 'next/link';
import fetch from 'unfetch';

import MediaQuery from 'react-responsive';
import FontAwesome from 'react-fontawesome';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import Input from '../components/Input/Input';
import TextArea from '../components/Input/TextArea';
import Button from '../components/Button/ButtonIcon';

const URL = 'http://yammas-env.zqwncmndy4.eu-central-1.elasticbeanstalk.com/api/contact/'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName : '',
      lastName :'',
      email : '',
      subject : '',
      message : '',
      success: false,
      error: '',
    }
  }

  postData = (firstName, lastName, email, subject, message) => {
    return fetch(`${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'first_name': firstName,
        'last_name': lastName,
        'email': email,
        'subject': subject,
        'message': message,
      })
    }).then((res) => {
      if (res.ok) {
        this.setState({ success: true });
        return res.json();
      }
      this.setState({ error: res.json() });
      return res.json();
    });
  }

  handleFirstName = e => {
    this.setState({ firstName: e.target.value });
    return;
  }
  handleLastName = e => {
    this.setState({ lastName: e.target.value });
    return;
  }
  handleEmail = e => {
    this.setState({ email: e.target.value });
    return;
  }
  handleSubject = e => {
    this.setState({ subject: e.target.value });
    return;
  }
  handleMessage = e => {
    this.setState({ message: e.target.value });
    return;
  }
  onSubmit = e => {
    const { firstName, lastName, email, subject, message, error } = this.state;
    e.preventDefault();
    this.postData(firstName, lastName, email, subject, message);
  }
  render() {
    return (
      <div>
        <MediaQuery maxWidth={768}>
          <div>
            <Navbar theme="dark" border/>
            <div className="contact-container">
              <div className="contact-form">
                <div className="contact-form--header">
                  <h2>Φόρμα επικοινωνίας</h2>
                  <hr />
                  { this.state.success &&
                    <div className="contact-form--success">
                      <div className="contact-form--success-icon">
                        <FontAwesome
                          name="check"
                          style={{ color: '#a4d48f' }}
                          size="2x"
                        />
                      </div>
                      <div className="contact-form-success-message">
                        <h4>Ευχαριστούμε πολύ, σύντομα θα μιλήσουμε εμείς μαζί σας</h4>
                      </div>
                    </div>
                  }
                </div>
                <MediaQuery maxWidth={767}>
                  <Input placeholder="Όνομα" onChange={e => onChange(e)} width={300} />
                  <Input placeholder="Επώνυμο" onChange={e => onChange(e)} width={300} />
                  <Input placeholder="Email επικοινωνίας" onChange={e => onChange(e)} width={300} />
                  <Input placeholder="Θέμα μηνύματος" onChange={e => onChange(e)} width={300} />
                  <TextArea placeholder="Μήνυμα" onChange={e => onChange(e)} width={300} />
                </MediaQuery>
                <MediaQuery minWidth={768} maxWidth={1024}>
                  <Input placeholder="Όνομα" onChange={e => onChange(e)} width={400} />
                  <Input placeholder="Επώνυμο" onChange={e => onChange(e)} width={400} />
                  <Input placeholder="Email επικοινωνίας" onChange={e => onChange(e)} width={400} />
                  <Input placeholder="Θέμα μηνύματος" onChange={e => onChange(e)} width={400} />
                  <TextArea placeholder="Μήνυμα" onChange={e => onChange(e)} width={400} />
                </MediaQuery>
                <MediaQuery minWidth={1024}>
                  <Input placeholder="Όνομα" onChange={e => onChange(e)} width={500} />
                  <Input placeholder="Επώνυμο" onChange={e => onChange(e)} width={500} />
                  <Input placeholder="Email επικοινωνίας" onChange={e => onChange(e)} width={500} />
                  <Input placeholder="Θέμα μηνύματος" onChange={e => onChange(e)} width={500} />
                  <TextArea placeholder="Μήνυμα" onChange={e => onChange(e)} width={500} />
                </MediaQuery>
                <div className="contact-form--submit">
                  <Button>Αποστολή</Button>
                </div>
              </div>
            </div>
            <Footer />
            <style jsx>{`
              .contact-container {
                display: flex;
                flex: 1 1 100%;
                flex-direction: column;
                align-items: center;
                padding-top: 4em;
                padding-bottom: 4em;
              }
      
              .contact-form {
                flex: 1 100%;
              }
      
              .contact-form--header {
                margin-bottom: 3rem;
              }
      
              .contact-form--header > hr {
                display: block;
                box-sizing: border-box;
                background: #d32f2f;
                border: 1px solid #d32f2f;
                margin-top: 0.25rem;
                margin-bottom: 0.25rem;
                margin-left: 0;
                margin-right: 0;
                width: 33%;
              }
      
              .contact-form--submit {
                float: right;
              }
      
              @media (max-width: 468px) {
                .contact-header {
                  display: none;
                }
              }
            `}</style>
          </div>
        </MediaQuery>
        <MediaQuery minWidth={769}>
          <div className="contact-container">
            <div className="back-icon">
              <Link href="/">
                <FontAwesome
                  name="chevron-left"
                  style={{ color: '#ffffff' }}
                  size="2x"
                />
              </Link>
            </div>
            <div className="contact-left">
              <h1>Θέλεις να μιλήσεις μαζί μας;</h1>
            </div>
            <div className="contact-right">
              <div className="contact-form">
                <div className="contact-form--logo">
                  <Link href="/">
                    <img src="/static/img/Yammas-01.JPG" alt="Yammas logo" />
                  </Link>
                </div>
                { this.state.success &&
                  <div className="contact-form--success">
                    <div className="contact-form--success-icon">
                      <FontAwesome
                        name="check"
                        style={{ color: '#a4d48f' }}
                        size="2x"
                      />
                    </div>
                    <div className="contact-form-success-message">
                      <p>Ευχαριστούμε πολύ, σύντομα θα μιλήσουμε εμείς μαζί σας.</p>
                    </div>
                  </div>
                }
                <div className="contact-form--header">
                  <h2>Φόρμα επικοινωνίας</h2>
                  <hr />
                </div>
                <div>
                  <MediaQuery maxWidth={767}>
                    <Input placeholder="Όνομα" onChange={e => this.handleFirstName(e)} width={300} />
                    <Input placeholder="Επώνυμο" onChange={e => this.handleLastName(e)} width={300} />
                    <Input placeholder="Email επικοινωνίας" onChange={e => this.handleEmail(e)} width={300} />
                    <Input placeholder="Θέμα μηνύματος" onChange={e => this.handleSubject(e)} width={300} />
                    <TextArea placeholder="Μήνυμα" onChange={e => this.handleMessage(e)} width={300} />
                  </MediaQuery>
                  <MediaQuery minWidth={768} maxWidth={1023}>
                    <Input placeholder="Όνομα" onChange={e => this.handleFirstName(e)} width={350} />
                    <Input placeholder="Επώνυμο" onChange={e => this.handleLastName(e)} width={350} />
                    <Input placeholder="Email επικοινωνίας" onChange={e => this.handleEmail(e)} width={350} />
                    <Input placeholder="Θέμα μηνύματος" onChange={e => this.handleSubject(e)} width={350} />
                    <TextArea placeholder="Μήνυμα" onChange={e => this.handleMessage(e)} width={350} />
                  </MediaQuery>
                  <MediaQuery minWidth={1024}>
                    <Input placeholder="Όνομα" onChange={e => this.handleFirstName(e)} width={500} />
                    <Input placeholder="Επώνυμο" onChange={e => this.handleLastName(e)} width={500} />
                    <Input placeholder="Email επικοινωνίας" onChange={e => this.handleEmail(e)} width={500} />
                    <Input placeholder="Θέμα μηνύματος" onChange={e => this.handleSubject(e)} width={500} />
                    <TextArea placeholder="Μήνυμα" onChange={e => this.handleMessage(e)} width={500} />
                  </MediaQuery>
                  <div className="contact-form--submit">
                    <Button 
                      disabled={this.state.success}
                      onClick={e => this.onSubmit(e)}
                    >
                      Αποστολή
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <style jsx>{`
              .contact-container {
                display: flex;
                min-height: 100vh;
              }
              .contact-left {
                display: flex;
                flex: 1 40%;
                justify-content: center;
                align-items: center;
                font-size: 2rem;
                background: #d32f2f;
                color: #fff;
              }
              .contact-left > h1 {
                padding-left: 1em;
                padding-right: 1em;
              }
              .contact-right {
                display: flex;
                position: relative;
                flex: 1 60%;
                flex-direction: column;
                justify-content: space-between;
                align-items: center;
              }
              .contact-form {
                display: flex;
                flex-direction: column;
                align-items: center;
              }
              .contact-form--header > hr {
                display: block;
                box-sizing: border-box;
                background: #d32f2f;
                border: 1px solid #d32f2f;
                margin-top: 0.25rem;
                margin-bottom: 0.25rem;
                margin-left: 0;
                margin-right: 0;
                width: 33%;
              }
              .contact-form--header {
                margin-bottom: 3rem;
              }
              .contact-form--submit {
                display: flex;
                justify-content: flex-end;
              }
              .contact-form--logo {
                display: flex;
                justify-content: center;
                margin-bottom: 1em;
              }
              .contact-form--logo > img {
                cursor: pointer;
              }
              .back-icon {
                position: absolute;
                top: 16px;
                left: 8px;
                cursor: pointer;
              }
              .contact-form--success {
                box-sizing: border-box;
                display: flex;
                align-items: center;
                padding: 0.5em 1em;
                margin-bottom: 2em;
                border: 2px solid #a4d48f;
                color: #333;
                background: rgba(164, 212, 143, 0.2);
              }
              .contact-form--success-icon {
                display: flex;
                margin-right: 0.5em;
              }
              .contact-form-success-message {
                display: flex;
              }
              @media (max-width: 767px) {
                .contact-form--success {
                  width: 300px;
                }
              }
              @media (min-width: 768px) and (max-width: 1023px) {
                .contact-form--success {
                  width: 350px;
                }
              }
              @media (min-width: 1024px) {
                .contact-form--success {
                  width: 500px;
                }
              }
            `}</style>
          </div>
        </MediaQuery>
      </div>
    );
  }
}

export default Contact;
