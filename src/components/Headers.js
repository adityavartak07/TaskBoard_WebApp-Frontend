import React from 'react'
import Button from './Button';

const Headers = ({toggleadd, showadd}) => {
   



    return (
        <header className="header">
            <h1>Task Tracker</h1>
            <Button onClick={toggleadd} showadd={showadd}/>
            
        
        </header>
    )
}

export default Headers
