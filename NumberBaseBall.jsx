const React = require('react')
const {useState, useRef} = React
const Try = require('./Try')

const getNumbers = () => {

}

const NumberBaseBall = () => {
    const [myNumber, setMyNumber] = useState(0)
    const [yourNumber, setYourNumber] = useState(getNumbers)
    const [result, setResult] = useState()
    const [tries, setTries] = useState()
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

    const fruits = [
        { fruit: '사과', beverage: '사과쥬스' },
        { fruit: '딸기', beverage: '딸기우유' },
        { fruit: '오렌지', beverage: '오렌지쥬스' }
    ]
    return (
        <>
            <h1>숫자야구</h1>
            <input maxLength={4} ref={input} type="number" onChange={onChangeHandler} value={myNumber} onKeyPress={onPressEnter}/>
            <button onClick={onClickHandler}>제출</button>
            <ul>
            {fruits.map((fruit, index)=>{
                return (
                    <Try 
                    key={fruit.fruit+fruit.beverage}
                    fruit={fruit}
                    index={index}
                    />
                )
            })}
            </ul>
            상대번호 : {yourNumber}
            <br/>
            {result}
        </>
    )
}

module.exports = NumberBaseBall