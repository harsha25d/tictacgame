import { useState } from "react"
export default function Player({name,symbol,isActive,onChangeName}){
    let [editedName,setEditedName] = useState(name);
    let [isEditing,setIsEditing] = useState(false);
    function addInput(){
        setIsEditing((editing)=>!editing);
        if(isEditing){
        onChangeName(symbol,editedName);
        }
    }
    function handleChange(e){
        setEditedName(e.target.value);
    }
    return(
        <li className={isActive ? "active" : undefined}>
          <span className="player">
          {(!isEditing)?<span className="player-name">{editedName}</span>:<input type="text" required value={editedName} onChange={handleChange}></input>}
          <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={addInput}>{(!isEditing)?"Edit":"Save"}</button>
        </li>
    )
}