import React from 'react'
import PropTypes from 'prop-types'

const SuperButton = (props, context) => {
  const component = { ...React.Component.prototype }

  SuperButton.displayName = 'SuperButton'
  SuperButton.propTypes = {
    label: PropTypes.string,
    action: PropTypes.func
  }
  SuperButton.defaultProps = {
    label: 'Default label'
  }

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

  return Object.assign(component, {
    props,
    context,
    render
  })
}

export default SuperButton
