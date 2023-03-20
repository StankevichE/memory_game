import logo from './logo.svg';
import './App.css';
import NewComponent from "./NewComponent";
import {useEffect, useState} from "react";

function App() {

    const [isOpen, setIsOpen] = useState(false);
    const toggle = () =>{
       setIsOpen(!isOpen)
    }

    useEffect(()=>{
        console.log('Component App.js did mount')
    },[])



    return (
        <div className="App">
            <h1>useEffect</h1>

        <button onClick={toggle}> {isOpen ? 'Close' : 'Open'} </button>
            { isOpen &&
                <NewComponent/>
            }
        </div>
    );
}

export default App;
