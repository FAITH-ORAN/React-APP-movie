import React from 'react';
//const Hello = () =>"Hello Faiza";

function Hello({name,children}){
    //console.log(props);
    return <div className="parent">
    <h1>Bonjour {name}</h1>
    <p>{children}</p> 
    </div>
}
export default Hello;
