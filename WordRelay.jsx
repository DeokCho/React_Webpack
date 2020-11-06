const React = require('react')
const {useState, useRef} = React

const WordRelay = () => {
    const [firstWord, setFirstWord] = useState("가나다라마바사".charAt(Math.floor(Math.random()*6)))
    const [secondWord, setSecondWord] = useState('')
    const [bingo, setBingo] = useState(false)
    const input = useRef(null)

    const onChangeHandler = e => {
        setSecondWord(e.currentTarget.value)
    }

    const onClickHandler = () => {
        if(firstWord.charAt(firstWord.length-1)===secondWord.charAt(0)){
            // charAt 대신  firstWord[firstWord.length-1] === secondWord[0]도 가능
            setFirstWord(secondWord)
            setSecondWord('')
            setBingo(true)
        }else{
            setSecondWord('')
            setBingo(false)
        }
        input.current.focus();
    }

    const onPressEnter = e => {
        e.key === 'Enter'? onClickHandler() : null
    }

    return (
        <>
            <h1>{firstWord}</h1>
            <input ref={input} type="text" onChange={onChangeHandler} value={secondWord} onKeyPress={onPressEnter}/>
            <button onClick={onClickHandler}>제출</button>
            <br/>
            <div>{bingo? "정답": "오답"}</div>
        </>
    )
}

module.exports = WordRelay