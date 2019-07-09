
import InsertBlockOnEnter from '../src'
import React from 'react'
import ReactDOM from 'react-dom'
import initialValue from './value.json'
import { Value } from 'slate'
import { Editor } from 'slate-react'

function Image(props) {
  const { node, value, isSelected } = props
  const src = node.data.get('src')
  const className = isSelected ? 'selected' : 'unselected'
  return (
    <img src={src} className={className} {...props.attributes} />
  )
}

function Paragraph(props) {
  const { attributes, children } = props
  return <p {...attributes}>{children}</p>
}


class Example extends React.Component {

  schema = {
    blocks: {
      image: {isVoid: true}
    }
  }

  plugins = [
    InsertBlockOnEnter({object: 'block', type: 'paragraph', nodes: []})
  ]

  state = {
    value: Value.fromJSON(initialValue)
  }

  onChange = ({value}) => {
    this.setState({ value })
  }

  renderNode = props => {
    switch (props.node.type) {
      case 'image': return <Image {...props} />
      default: return <Paragraph {...props} />
    }
  }

  render = () => {
    return (
      <Editor
        onChange={this.onChange}
        plugins={this.plugins}
        renderNode={this.renderNode}
        value={this.state.value}
        schema={this.schema}
      />
    )
  }

}

const example = <Example />
const root = document.body.querySelector('main')
ReactDOM.render(example, root)
