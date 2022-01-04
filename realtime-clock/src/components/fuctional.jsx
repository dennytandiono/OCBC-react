import React, { useEffect, useState } from 'react';

function Functional() {
    function tick() {
        setDate(new Date())
    }

    const [date, setDate] = useState(new Date())

    //setInterval(() => tick(), 1000)
    useEffect(() => {
        const interval = setInterval(() => tick(), 1000);
        console.log("baru");
        return () => {
          clearInterval(interval);
        };
      }, []);

    return (
    <div className='functional'>
        <h1>Realtime CLOCK Functional</h1>
        <hr />
        <h1>{date.toLocaleTimeString()}</h1>
    </div>
    );
}

export default Functional;