var Header = React.createClass({
  render: function() {
    return (
      React.createElement('div', {className: 'contactsHeader'},
        React.createElement('h1', {className: 'contactsHeading'}, "Your contacts"),
        React.createElement('i', {
          className: 'fas fa-users',
        }),
      )
    )
  }
})
