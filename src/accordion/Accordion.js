import React, { Component } from 'react'
import './Accordion.css'

export default class Accordion extends Component {
  static defaultProps = {
    sections: []
  };

  state = {
    activeSectionIndex: null,
  }

  handleSetActiveSecion = (sectionIndex) => {
    this.setState({ activeSectionIndex: sectionIndex })
  }

  renderItem(section, idx, activeSectionIndex) {
    return (
      <li className='Accordion__item' key={idx}>
        <button
          type='button'
          onClick={() => this.handleSetActiveSecion(idx)}
        >
          {section.title}
        </button>
        {(activeSectionIndex === idx) && <p>{section.content}</p>}
      </li>
    )
  }

  render() {
    const { activeSectionIndex } = this.state
    const { sections } = this.props
    return (
      <ul className='Accordion'>
        {sections.map((section, idx) =>
          this.renderItem(section, idx, activeSectionIndex)
        )}
      </ul>
    )
  }
}
