import React, {useState,useEffect} from 'react'

const scores = {
    sicssors: 1,
    rock:0,
    paper:-1
}

const RSP = () => {
    const [result, setResult]=useState('')
    const [imgCoord, setImgCoord]=useState(0)
    const [score, setscore]=useState(0)

    const rspCoords = {
        rock:0,
        sicssors:'-142px',
        paper:'-284px'
    }
    
    let interval

    useEffect(()=>{
        interval = setInterval(changeHand, 300)    
    },[imgCoord])

    const computerChoice = (imgCoord => {
        return Object.entries(rspCoords).find(function(v){
            return v[1] === imgCoord
        })[0]
    })

    const changeHand = () => {
        if(imgCoord===rspCoords.rock){
            setImgCoord(rspCoords.sicssors) 

        }else if(imgCoord===rspCoords.sicssors){
            setImgCoord(rspCoords.paper) 

        }else if(imgCoord===rspCoords.paper){
            setImgCoord(rspCoords.rock) 
            
        }
        clearInterval(interval)
    }

    const onClickBtn = (choice) => {
        clearInterval(interval)
        setTimeout(()=>{
            interval = setInterval(changeHand, 300) 
        },2000)
        const myScore = scores[choice]
        const cpuScore = scores[computerChoice(imgCoord)]
        const diff = myScore - cpuScore
        if(diff === 0){
            setResult('비겼습니다.')
        }else if([-1, 2].includes(diff)){
            setResult('이겼습니다.')
            setscore((prevScore)=>{
                return prevScore +1
            })
        }else {
            setResult('졌습니다.')
            setscore((prevScore)=>{
                return prevScore -1
            })
        }
         
    }


    return (
        <>
            <div id="computer" style={{background: `url(./23182267.jpg) ${imgCoord} 0`}}/>
            <button onClick={()=>{onClickBtn('rock')}}>주먹</button>
            <button onClick={()=>{onClickBtn('sicssors')}}>가위</button>
            <button onClick={()=>{onClickBtn('paper')}}>보</button>
            <br/>
            <div>현재 : {score}점</div>
        </>
    )
}

export default RSP