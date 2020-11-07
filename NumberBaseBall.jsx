const React = require('react')
const {useState, useRef} = React
const Try = require('./Try')

const getNumbers = () => {
    const candidate = [1,2,3,4,5,6,7,8,9]
    const array = []
    for(let i=0; i<4; i +=1){
        const chosen = candidate.splice(Math.floor(Math.random()*(9-i)), 1)[0]
        array.push(chosen)
    }
    return array
}

const NumberBaseBall = () => {
    const [myNumber, setMyNumber] = useState('')
    const [yourNumber, setYourNumber] = useState(getNumbers())
    const [result, setResult] = useState('')
    const [tries, setTries] = useState([])
    const input = useRef()

    const onChangeHandler = e => {
        e.preventDefault()
        setMyNumber(e.currentTarget.value)
    }

    const onClickHandler = () => {
        if(myNumber===yourNumber.join('')){
            setTries((prevState)=>([
                ...tries, {try: yourNumber, result:'홈런'}
                
            ]))
            alert('새로운 게임 시작')
            setMyNumber('')
            setYourNumber(getNumbers())
            setTries([])
        } else{
            const yourNumberArray = myNumber.split('').map((value)=>parseInt(value))
            let strike = 0
            let ball = 0
            if(tries.length >=9){
                setResult(`10번 오답. 정답은 ${yourNumber.join('')}`)
            } else{
                for(let i=0; i<4; i+=1){
                    if(yourNumberArray[i] === yourNumber[i]){
                        strike +=1
                    } else if(yourNumber.includes(yourNumberArray[i])){
                        ball +=1
                    }
                }
                setTries((prevState)=>([
                    ...tries, {try:myNumber, result: `${strike} 스트라이크 ${ball} 볼`}
                ]))
            }
            setMyNumber('')
        } 
        input.current.focus()
    }
    const onPressEnter = e => {
        e.key === 'Enter' ? onClickHandler() : null
    }
    return (
        <>
            <h1>숫자야구</h1>
            <input maxLength={4} ref={input} type="number" onChange={onChangeHandler} value={myNumber} onKeyPress={onPressEnter}/>
            <button onClick={onClickHandler}>제출</button>
            <ul>
            {tries.map((value, index)=>{
                return (
                    <Try 
                    key={value+(index+1)}
                    tryInfo={value}
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