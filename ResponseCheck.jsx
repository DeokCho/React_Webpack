import React, {useState, useRef} from 'react'

const ResponseCheck = () => {
    const [color, setColor] = useState('waiting')
    const [message, setMessage] = useState('클릭해서 시작하세요.')
    const [result, setResult] = useState([])
    
    let timeout = useRef()
    let startTime = useRef()
    let endTime = useRef()

    const onClickScreen = () => {
        if(color === 'waiting'){
            setColor('ready')
            setMessage('초록색이 되면 클릭하세요')
            
            timeout = setTimeout(()=>{
                setColor('now')
                setMessage('지금 클릭')
            }, Math.floor(Math.random()*1000)+2000)
            startTime.current = new Date()

        } else if(color==='ready'){
            clearTimeout(timeout.current)
            setColor('waiting')
            setMessage('성급합니다.')

        }else if(color==='now'){
            endTime.current = new Date()
            setColor('waiting')
            setMessage('클릭해서 시작하세요.')
            setResult((prevResult)=>[...prevResult, endTime.current-startTime.current])
        }
    }

    return (
        <div>
            <div 
                id="screen"
                className={color} 
                onClick={onClickScreen}
            >
                {message}</div>
                {result.length ===0
                    ? null
                    : <div>
                        평균시간 : {result.reduce((a,c)=>a+c)/result.length}ms
                    </div>
}
        </div>
    )
}

export default ResponseCheck