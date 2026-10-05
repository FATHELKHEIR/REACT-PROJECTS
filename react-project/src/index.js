import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './components/departmentSearch/app';
const element=document.getElementById("root")
const root=ReactDOM.createRoot(element)

function Show(){

    return (
        <div>
            <App />
        </div>
    )
}
root.render(<Show/>)