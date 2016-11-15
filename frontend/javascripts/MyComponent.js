const React = require('react');
const renderReact = require('hypernova-react').renderReact;

function MyComponent(props) {
  return React.createElement('div', {
    onClick: () =>{
      alert("hgoe");
    },
  }, 'Hello, ' + props.name + '!');
}

module.exports = renderReact('MyComponent.js', MyComponent)
