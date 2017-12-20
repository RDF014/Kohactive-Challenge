import React, { Component } from 'react';
import Axios from 'axios';

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      subject: '',
      message: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.sendMail = this.sendMail.bind(this);
  }

  sendMail () {
    const {
      recipient,
      subject,
      message
    } = this.state;
    Axios.post('/v1/mail', {
      recipient,
      subject,
      message
    })
    .then(res => alert('Email was successfully sent') )
    .catch(err => alert('Email could not be sent') ); 
  }


  onSubmit(e) {
    e.preventDefault();
    this.sendMail();
  }

  onChange(e, key) {
    const newValue = e.target.value;
    const newState = {[key]: newValue};
    this.setState(newState);
  }

  render() {
    const {
      recipient,
      subject,
      message
    } = this.state;
    return (
      <div>
        <h3> Email will be sent from no_reply@raphaeldf.com </h3>
        <form>
          <p>To: 
            <input 
              type="text"
              placeholder="JoeSchmoe@email.com"
              name="recipient"
              value={recipient}
              onChange={(e) => this.onChange(e, 'recipient')}
              required
            />
          </p>
          <p>Subject: 
            <input 
              type="text"
              placeholder="Hello"
              name="subject"
              value={subject}
              onChange={(e) => this.onChange(e, 'subject')}
              required
            />
          </p>
          <p>Message:</p>
          <textarea 
            placeholder="Hello Friend, ...."
            onChange={(e) => this.onChange(e, 'message')}
            rows={10}
            cols={65}
            required
          />
          <br/>
          <input type="submit" value="submit" onClick={(e) => this.onSubmit(e)}/>
        </form>
      </div>
    );
  }
}

export default EmailForm;