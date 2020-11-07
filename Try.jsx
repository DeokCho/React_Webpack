const React = require('react')

const Try = (props) => {
    return (
        <li>
            <div>{props.fruit.fruit} - {props.index}</div>
            <div>컨텐츠</div>
            <div>컨텐츠</div>
            <div>컨텐츠</div>
            <div>컨텐츠</div>
            <div>컨텐츠</div>
        </li>
    )
}

module.exports = Try