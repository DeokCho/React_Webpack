const React = require('react')
const ReactDom = require('react-dom')

const WordRelay = require('./WordRelay')
const NumberBaseBall = require('./NumberBaseBall')
import Test from './Test'
import ResponseCheck from './ResponseCheck'

ReactDom.render(<ResponseCheck/>, document.querySelector('#root'))