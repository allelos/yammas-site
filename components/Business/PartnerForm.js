import React from 'react';
import fetch from 'unfetch';

import MediaQuery from 'react-responsive';
import FontAwesome from 'react-fontawesome';


import Input from '../Input/Input';
import Button from '../Button/ButtonIcon';

const URL = 'http://yammas-env.zqwncmndy4.eu-central-1.elasticbeanstalk.com/api/business/'

class PartnerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      vendorName: '',
      area: '',
      email: '',
      phone: '',
      success: false,
      error: '',
    }
  }

  postData = (name, vendorName, area, email, phone) => {
    return fetch(`${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        'name': name,
        'vendor_name': vendorName,
        'email': email,
        'area': area,
        'phone': phone,
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

  handleName = e => this.setState({ name: e.target.value });
  handleVendorName = e => this.setState({ vendorName: e.target.value });
  handleArea = e => this.setState({ area: e.target.value });
  handleEmail = e => this.setState({ email: e.target.value });
  handlePhone = e => this.setState({ phone: e.target.value });
  onSubmit = e => {
    const { name, vendorName, area, email, phone } = this.state;
    e.preventDefault();
    this.postData(name, vendorName, area, email, phone);
    return;
  }

  render() {
    return (
      <div>
        { this.state.success &&
          <div className="form--success">
            <div className="form--success-icon">
              <FontAwesome
                name="check"
                style={{ color: '#a4d48f' }}
                size="2x"
              />
            </div>
            <div className="form-success-message">
              <p>Ευχαριστούμε πολύ, σύντομα θα επικοινωνήσουμε εμείς μαζί σας.</p>
            </div>
            <style jsx>{`
              .form--success {
                box-sizing: border-box;
                display: flex;
                width: 300px;
                align-items: center;
                padding: 0.5em 1em;
                margin-bottom: 2em;
                border: 2px solid #a4d48f;
                color: #333;
                background: rgba(164, 212, 143, 0.2);
              }
              .form--success-icon {
                display: flex;
                margin-right: 0.5em;
              }
              @media (min-width: 768px) {
                .form--success {
                  width: 400px;
                }
              }
            `}</style>
          </div>
        }
        <MediaQuery maxWidth={767}>
          <Input 
            placeholder="Όνομα & Επώνυμο"
            onChange={e => this.handleName(e)}
            width={300}
          />      
          <Input 
            placeholder="Όνομα επιχείρησης"
            onChange={e => this.handleVendorName(e)}
            width={300}
          />      
          <Input 
            placeholder="Περιοχή"
            onChange={e => this.handleArea(e)}
            width={300}
          />      
          <Input 
            placeholder="Email"
            onChange={e => this.handleEmail(e)}
            width={300}
          />      
          <Input 
            placeholder="Τηλέφωνο"
            onChange={e => this.handlePhone(e)}
            width={300}
          />
          <Button
            disabled={this.state.success}
            onClick={e => this.onSubmit(e)}
          >Αποστολή</Button>  
        </MediaQuery>
        <MediaQuery minWidth={768}>
          <Input 
            placeholder="Όνομα & Επώνυμο"
            onChange={e => this.handleName(e)}
            width={400}
          />      
          <Input 
            placeholder="Όνομα επιχείρησης"
            onChange={e => this.handleVendorName(e)}
            width={400}
          />      
          <Input 
            placeholder="Περιοχή"
            onChange={e => this.handleArea(e)}
            width={400}
          />      
          <Input 
            placeholder="Email"
            onChange={e => this.handleEmail(e)}
            width={400}
          />      
          <Input 
            placeholder="Τηλέφωνο"
            onChange={e => this.handlePhone(e)}
            width={400}
          />
          <Button disabled={this.state.success} onClick={(e) => this.onSubmit(e)}>Αποστολή</Button>  
        </MediaQuery>
      </div>
    );
  }
}

export default PartnerForm;