import React from "react";

const ChildComponent=(prop)=>{
    return(
        <div className="child-component">
            <h2>Child Component</h2>
            <button onClick={()=>prop.changeModal(true)}>Show Modal</button>
            {console.log("child")}
            {
                prop.Modal==true && <div>
                <h3>Modal Content</h3>
                <p>This is the modal content.</p>
              </div>
            }
        </div>
    )   
}

export default ChildComponent