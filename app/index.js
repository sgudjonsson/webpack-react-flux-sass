import 'styles/index.scss'
import React from 'react'
import ReactDom from 'react-dom'
import HelloWorld from 'components/hello-world'

export default function(element) {
  ReactDom.render(<HelloWorld />, element);
}
