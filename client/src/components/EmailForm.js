import React, { Component } from 'react';

class EmailForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      message: ''
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    e.preventDefault();
    console.log('submit');
  }

  onChange(e, key) {
    console.log('chage')
    const newValue = e.target.value;
    const newState = {[key]: newValue};
    this.setState(newState);
  }

  render() {
    const {
      recipient,
      message
    } = this.state;
    return (
      <div className="Input">
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