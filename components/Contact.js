var Contact = React.createClass({
  propTypes: {
    item: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      <div className={'contactItem'}>
        <i className={'fas fa-user'}/>
        <p className={'contactLabel'}>
          {this.props.item.firstName}  {this.props.item.lastName}
        </p>
        <a className={'contactEmail'} href={'mailto' + this.props.item.email}>
          {this.props.item.email}
        </a>
      </div>
    )
  },
});
