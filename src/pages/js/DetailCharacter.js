import React, { useState, useEffect } from "react";

import Popup from "../../component/popup";
import '../style/DetailCharacter.css';
import Navbar from "../../component/navbar"
import axios from "axios";
import Select from 'react-select'
import {collection, getDocs, addDoc, getDoc} from "firebase/firestore";
import { db } from '../../firebase-config';

import { useParams } from "react-router-dom";

export default function DetailCharacterPage(){
    const { id } = useParams();
    const [chosenChar, setChosenChar] = useState("");
    const [locList, setLocList] = useState([]);
    const [value, setValue] = useState("");
    const [assignedLoc, setAssignedLoc] = useState("");
    const [charbyLoc, setCharbyLoc] = useState([]);
    const charCollectionRef = collection(db, "CharbyLoc")

    const changeHandler = value => {
        setValue(value);
    }

    const createCharbyLoc = async() => {
        const data = await addDoc(charCollectionRef, {location: value, assgnloc: assignedLoc, char: chosenChar.name})
    }

    const getResponse = async () => {
        let res = await axios.get("https://rickandmortyapi.com/api/character");
        setChosenChar(res.data.results[id-1]);
        //console.log(res.data.results[id-1])
        let res_loc = await axios.get("https://rickandmortyapi.com/api/location");
        setLocList(res_loc.data.results);
        //console.log(res_loc.data.results)
    }
    useEffect(()=>{
        getResponse();
    }, []);

    let loc_names = [];
    for(var j=0; j<locList.length; j++){
        let toAdd = {};
        toAdd["value"] = [];
        toAdd["label"] = [];
        toAdd.value = locList[j].name
        toAdd.label = locList[j].name
        loc_names.push(toAdd);
    }
    //console.log(locList);
    return (
        <>
        <Navbar/>
        <main>
            <div className="Content">
                <div className="picture">
                    <img src={chosenChar.image}/>
                </div>
                <div className="name-text">{chosenChar.name}</div>
                <div className="desc-text">{"Status: "+chosenChar.status}</div>
                <div className="desc-text">{"Species: "+chosenChar.species}</div>
                <div className="desc-text">{(chosenChar.type === "") ? "Type: -" : "Type: "+ chosenChar.type}</div>
                <div className="desc-text">{"Species: "+chosenChar.species}</div>
                <div className="select-location">Assign location to this character</div>
                <Select options={loc_names} value={value} onChange={changeHandler} label="Assign Location"></Select>
                <form className="form">
                <label className="label-form">
                    Name of Location:
                    <input type="text" name="location" />
                </label>
                <input className="submit-btn" type="submit" value="Submit" />
                </form>
            </div>
        </main>
        </>
        
    )
}