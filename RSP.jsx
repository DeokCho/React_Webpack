import React, {useState,useEffect} from 'react'

const RSP = () => {
    const [result, setResult]=useState('')
    const [imgCoord, setImgCoord]=useState(0)
    const [score, setScore]=useState(0)

    const rspCoords = {
        rock:0,
        scissor:'-142px',
        paper:'-284px'
    }

    useEffect(()=>{
        let interval
        interval = setInterval(()=>{
            if(imgCoord===rspCoords.rock){
                setImgCoord(rspCoords.scissor) 

            }else if(imgCoord===rspCoords.scissor){
                setImgCoord(rspCoords.paper) 

            }else if(imgCoord===rspCoords.paper){
                setImgCoord(rspCoords.rock) 
                
            }
            clearInterval(interval)
        }, 1000)    
    },[imgCoord])

    const onClickBtn = (choice) => {
        if(choice===imgCoord){
        }
    }


    return (
        <>
            <div id="computer" style={{background: `url(./23182267.jpg) ${imgCoord} 0`}}/>
            <button onClick={()=>{onClickBtn('rock')}}>주먹</button>
            <button onClick={()=>{onClickBtn('sicssor')}}>가위</button>
            <button onClick={()=>{onClickBtn('paper')}}>보</button>
            <br/>
            <div>현재 : {score}점</div>
        </>
    )
}

export default RSP