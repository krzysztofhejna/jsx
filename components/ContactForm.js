var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <form className='contactForm'>
        <input type='text' placeholder='Name' value={this.props.contact.firstName}/>
        <input type='text' placeholder='Surname' value={this.props.contact.lastName}/>
        <input type='text' placeholder='Email' value={this.props.contact.Email}/>
        <button className='contactBtn' type='submit'>Add to contacts</button>
      </form>
    );
  },
});
