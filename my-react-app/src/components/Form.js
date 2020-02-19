import React from 'react';

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      login: '',
      html_url: '',
      location: '',
      bio: '',
      followers: '',
      following: '',
    }
  }

  render() {
    return (
      <div>
        Hello 
      </div>
    )
  }
};

export default Form;