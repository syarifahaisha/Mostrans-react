import React, { useState, useEffect } from "react";
import Navbar from "../../component/navbar"
import axios from "axios";
import {Link} from "react-router-dom";
import '../style/CharacterLocation.css'
import { getDocs, collection } from "firebase/firestore";
import { db } from '../../firebase-config'

export default function CharacterLocationPage(){
    const [locList, setLocList] = useState([])
    const [charbyLoc, setCharbyLoc] = useState([]);
    const charCollectionRef = collection(db, "CharbyLoc")

    const getResponse = async () => {
        let res_loc = await axios.get("https://rickandmortyapi.com/api/location");
        setLocList(res_loc.data.results);
        //console.log(res_loc.data.results)
        const data = await getDocs(charCollectionRef)
        setCharbyLoc(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }
    useEffect(()=>{
        getResponse();
    }, []);

    return (
        <>
            <Navbar/>
            <main>
                <div className="Container">
                    < ul className="List-Container">
                        {charbyLoc.map((element,index) => {
                                return (
                                    <li key={index} className="loc">
                                        <Link to={"/loc/detail/" + element.id}>
                                            <span>{element.assgnloc}</span>
                                        </Link>
                                        <div className="see-residents">see residents</div>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
            </main>
        </>
            
    )
}