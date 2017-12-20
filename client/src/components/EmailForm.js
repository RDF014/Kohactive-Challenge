import React, { Component } from 'react';
import Axios from 'axios';

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipients: '',
      subject: '',
      message: ''
    };
    ['onChange',
    'onSubmit',
    'sendMail'
    ].forEach(method => this[method] = this[method].bind(this));
  }

  sendMail () {
    const {
      recipients,
      subject,
      message
    } = this.state;
    Axios.post('/v1/mail', {
      recipients,
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
      recipients,
      subject,
      message
    } = this.state;
    return (
      <div>
        <h3> Email will be sent from no_reply@raphaeldf.com </h3>
        <form>
          <p>To: 
            <input
              size="100"
              type="text"
              placeholder="JoeSchmoe@email.com JaneDoe@email.com"
              name="recipients"
              value={recipients}
              onChange={(e) => this.onChange(e, 'recipients')}
              required
            /><br/>
            <span>If sending to multiple people, please separate emails with a space</span>
          </p>
          <p>Subject: 
            <input 
              size="75"
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