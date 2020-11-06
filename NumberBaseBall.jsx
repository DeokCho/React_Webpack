const React = require('react')
const {useState, useRef} = React

const NumberBaseBall = () => {
    const [myNumber, setMyNumber] = useState(0)
    const [yourNumber, setYourNumber] = useState((
        Math.ceil(Math.random()*9)*100
        + Math.ceil(Math.random()*9)*10
        + Math.ceil(Math.random()*9)
    ).toString())
    const [jusify, setJusify] = useState([])
    const [result, setResult] = useState()
    const input = useRef()

    const onChangeHandler = e => {
        e.preventDefault()
        setMyNumber(e.currentTarget.value)
    }

    const evalutate = () => {
        for(let i=0; i<3; i++){
            if(myNumber[i] === yourNumber[i]){
            }else if(yourNumber.includes(myNumber[i])){
            }else{
            }
        }
    }
    const onClickHandler = () => {
        evalutate()
        if(myNumber===yourNumber){
            setResult("정답"); 
            setMyNumber('')
        } else{
            setResult("오답")
            setMyNumber('')
        } 
        input.current.focus()
    }
    const onPressEnter = e => {
        e.key === 'Enter' ? onClickHandler() : null
    }
    return (
        <>
            {jusify}
            <h1>숫자야구</h1>
            <input ref={input} type="number" onChange={onChangeHandler} value={myNumber} onKeyPress={onPressEnter}/>
            <button onClick={onClickHandler}>제출</button>
            <br/>
            나의 번호 : {myNumber}
            <br/>
            상대번호 : {yourNumber}
            <br/>
            {result}
        </>
    )
}

module.exports = NumberBaseBall