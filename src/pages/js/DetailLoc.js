import React, { useState, useEffect } from "react";
import '../style/DetailLoc.css';
import Navbar from "../../component/navbar"
import axios from "axios";
import { db } from '../../firebase-config'
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";

export default function DetailLocPage(){
    const { id } = useParams();
    const [charbyLoc, setCharbyLoc] = useState([]);
    const charCollectionRef = collection(db, "CharbyLoc")
    const [chosenLoc, setChosenLoc] = useState([]);
    let a;

    const getResponse = async () => {
        // let res = await axios.get("https://rickandmortyapi.com/api/location");
        // setChosenLoc(res.data.results[id-1]);
        // //console.log(res.data.results[id-1])
        // let res_char = await axios.get("https://rickandmortyapi.com/api/character");
        // setCharList(res_char.data.results);
        // //console.log(res_loc.data.results)
        const data = await getDocs(charCollectionRef)
        setCharbyLoc(data.docs.map((doc) => ({...doc.data(), id: doc.id})))

    }

    charbyLoc.map((element,index) => {
        (id == charbyLoc.id) ? setChosenLoc(element): a=1; 
    })

    let char = [];
    for(var j=0; j<charbyLoc.length; j++){
        if (charbyLoc[j].id === id){
            chosenLoc = charbyLoc[j][0];
            let toAdd = {};
            toAdd["value"] = [];
            toAdd["label"] = [];
            toAdd.value = charbyLoc[j].char.name
            toAdd.label = charbyLoc[j].char.name
            char.push(toAdd);
        }
    }

    useEffect(()=>{
        getResponse();
    }, []);
    console.log(chosenLoc);
    return(
        <>
        <Navbar/>
        <main>
            <div className="Content">
                <div className="name-text">{chosenLoc.location}</div>
                <div className="desc-text">{"Location Name: "+chosenLoc.assgnloc}</div>
                <div className="desc-text">{"Assigned Character: "}</div>
                <ul className="assigned-char-list">
                    {/* {
                        
                        chosenLoc.char.map((element,index)=>{
                            return(
                                <li key={index} className="assgined-char">
                                    <div className="char-name">{element.value}</div>
                                </li>
                            )
                        })
                    } */}
                </ul>
            </div>
        </main>
        </>
    )
}