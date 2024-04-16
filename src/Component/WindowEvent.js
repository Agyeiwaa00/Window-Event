import { useEffect, useState} from "react";

function WindowEvent (){
const [message, setMessage]= useState('')
const doubleClick = ()=> alert('moused pressed')
useEffect(() => {
window.addEventListener('dblClick', doubleClick)
return () => window.removeEventListener('dblClick',doubleClick)
    },[])

return(
    <div>
       
        <button className="text-center border-2 m-10 p-2" onClick={()=>doubleClick()} onMouseEnter={() => setMessage('Window Event Active')}
        onMouseLeave={() => setMessage(false)}>
            Toggle window event 
        </button>
        <h1 className="text-center font-bold test-2xl my-3">{message}</h1>
        
    </div>
)
}
export default WindowEvent;