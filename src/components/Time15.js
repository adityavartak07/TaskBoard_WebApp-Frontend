import React from 'react'
import { useState } from 'react'
import { Button } from 'reactstrap'


function Timer15() {
    let countdown7;
    const [flag, setFlag] = useState(false);
    const [dtimer, setTimer] = useState("15:00");
  
    const flip15 = () => {
       
        setFlag(!flag);
        if(flag){
         timer(900);
        }

    }
    
        const timer=(seconds15) => {
        
            const now = Date.now();
            console.log(now);
            const then = now + seconds15 * 1000;

            countdown7 = setInterval(() => {
                const seconds7left = Math.round((then - Date.now()) / 1000);
                if (seconds7left < 0) {
                    clearInterval(countdown7)
                    alert('your time is over bitch')
                    return;
                }
                console.log(seconds7left);
                displaytime(seconds7left)



            }, 1000);
            const displaytime = (seconds15) => {
                const minutes=Math.floor(seconds15 / 60)
                const rseconds7=seconds15 % 60
                console.log({ minutes, rseconds7 })
                setTimer(minutes+':'+rseconds7)
                document.title = dtimer;
                return dtimer;
        
            }
        }

        





    
    





    return (
        <div className="timer">
        <Button className="timebutton2" onClick={()=>flip15()}>{dtimer}</Button>
            
        </div>
    )
}

export default Timer15
