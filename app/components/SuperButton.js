import React from 'react'
import PropTypes from 'prop-types'

const SuperButton = (props, context) => {
  // Create a new component that has everything in React.Component.prototype
  const component = { ...React.Component.prototype }

  SuperButton.displayName = 'SuperButton'
  SuperButton.propTypes = {
    label: PropTypes.string,
    action: PropTypes.func
  }
  SuperButton.defaultProps = {
    label: 'Default label'
  }

  // Call the function that is passed into the component's props.
  const onClick = e => {
    e.preventDefault()

    component.props.action('button clicked')
  }

  const render = () => (
    <button
        className="super-button"
        onClick={onClick}>
      {component.props.label}
    </button>
  )

  // Return a new object that is a custom component, overriding prototype
  // attributes with those defined here.
  return Object.assign(component, {
    props,
    context,
    render
  })
}

export default SuperButton
