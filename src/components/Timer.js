import React from 'react'
import { useState } from 'react'
import { Button } from 'reactstrap'











const Timer = () => {



    const [flag, setFlag] = useState(false);
    const [dtimer, setTimer] = useState("25:00");





    let countdown;



    const timer = (seconds) => {
        clearInterval(countdown)
        setTimer('25:00')
        setFlag(!flag);
        if (flag) {
            seconds = 1500;





            const now = Date.now();
            console.log(now);
            const then = now + seconds * 1000;


            countdown = setInterval(() => {
                const secondsleft = Math.round((then - Date.now()) / 1000);
                if (secondsleft < 0) {
                    clearInterval(countdown)
                    alert('your time is over bitch')
                    return;
                }
                console.log(secondsleft);
                displaytime(secondsleft)



            }, 1000);
            const displaytime = (seconds) => {
                const minutes = Math.floor(seconds / 60)
                const rseconds = seconds % 60
                console.log({ minutes, rseconds })
                setTimer(minutes + ':' + rseconds)
                document.title = dtimer;
                return dtimer;

            }
        }
    }














    return (
        
        <div className="timer">
            <Button className="timebutton" onClick={timer}>{dtimer}</Button>
           
           </div>

        
           


       
    )
}

export default Timer
