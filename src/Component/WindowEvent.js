import { useEffect} from "react";

function WindowEvent (){

    const doubleClick = ()=> alert('moused pressed')
    
    useEffect(() => {
    window.addEventListener('dblClick', doubleClick)
    return () => window.removeEventListener('dblClick',doubleClick)
    },[])

return(
    <div>
        <button className="text-center border-2 text-base m-10 p-2" onClick={()=>doubleClick()}>Toggle window event</button>
        <h1 className="text-center font-bold test-2xl my-3">wind event active</h1>
    </div>
)
}
export default WindowEvent;