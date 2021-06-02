import React from 'react'
import { useState } from 'react'
import { Button } from 'reactstrap'


function Timer7() {
    let countdown7;
    const [flag, setFlag] = useState(false);
    const [dtimer, setTimer] = useState("7:00");
  
    const flip7 = () => {
       
        setFlag(!flag);
        if(flag){
         timer(420);
        }

    }
    
        const timer=(seconds7) => {
        
            const now = Date.now();
            console.log(now);
            const then = now + seconds7 * 1000;

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
            const displaytime = (seconds7) => {
                const minutes=Math.floor(seconds7 / 60)
                const rseconds7=seconds7 % 60
                console.log({ minutes, rseconds7 })
                setTimer(minutes+':'+rseconds7)
                document.title = dtimer;
                return dtimer;
        
            }
        }

        





    
    





    return (
        <div className="timer1">
        <Button className="timebutton1" onClick={flip7}>{dtimer}</Button>
            
        </div>
    )
}

export default Timer7
