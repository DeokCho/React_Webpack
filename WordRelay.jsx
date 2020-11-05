const React = require('react')
const {useState} = React

const WordRelay = () => {
    const [firstWord, setFirstWord] = useState("가나다라마바사".charAt(Math.floor(Math.random()*6)))
    const [secondWord, setSecondWord] = useState('')
    const [bingo, setBingo] = useState(false)

    const onChangeHandler = e => {
        setSecondWord(e.currentTarget.value)
    }

    const onClickHandler = () => {
        if(firstWord.charAt(firstWord.length-1)===secondWord.charAt(0)){
            setFirstWord(secondWord)
            setSecondWord('')
            setBingo(true)
        }else{
            setSecondWord('')
            setBingo(false)
        }
    }
    return (
        <>
            <h1>{firstWord}</h1>
            <input type="text" onChange={onChangeHandler} value={secondWord}/>
            <button onClick={onClickHandler}>제출</button>
            <br/>
            <div>{bingo? "정답": "오답"}</div>
        </>
    )
}

module.exports = WordRelay