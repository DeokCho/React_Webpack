const React = require('react')
const ReactDom = require('react-dom')

const WordRelay = require('./WordRelay')
const NumberBaseBall = require('./NumberBaseBall')

ReactDom.render(<NumberBaseBall/>, document.querySelector('#root'))