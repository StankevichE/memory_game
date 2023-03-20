import React, {useEffect, useState} from 'react';

const NewComponent = () => {
    const [counter, setCounter] = useState(1);
    const changeCounter = (value) => {
        setCounter(counter + value)
    }
///// этап вмонтирования в ДОМ (NewComponent)
    useEffect(() => {
        console.log('NewComponent did mount')
    }, [])

////// этап изменения в состоянии (useState)
    useEffect(() => {
        console.log('Counter changed')
    }, [counter])

/////этап размонтирования в ДОМ (NewComponent)
    useEffect(()=>{
        return()=>{
            console.log('unmounting')
        }
    }, [])

    return (
        <div>
            <h2> New component</h2>
            <button onClick={() => changeCounter(-1)}> -</button>
            {counter}
            <button onClick={() => changeCounter(+1)}> +</button>
        </div>
    );
};

export default NewComponent;