import React, { useState, useEffect } from "react";
import {Link} from "react-router-dom";
import axios from "axios";
import Navbar from "../../component/navbar"
import '../style/CharacterList.css'

export default function CharacterListPage(){
    const [listChar, setlistChar] = useState([])

    const getResponse = async () => {
        let res = await axios.get("https://rickandmortyapi.com/api/character");
        setlistChar(res.data.results);
        // console.log(res.data)
    }
    useEffect(()=>{
        getResponse();
    }, []);
    console.log(listChar)
    
    return (
        <> 
            <Navbar/>
            <div className="Content">
                < ul className="List-Container">
                    {listChar.map((element,index) => {
                            return (
                                <li key={index} className="char">
                                    <Link to={"/detail/" + element.id}>
                                        <div className="char-pic">
                                            <img src={element.image}/>
                                        </div>
                                    </Link>
                                    <Link to={"/detail/" + element.id}>
                                        <span>{element.name}</span>
                                    </Link>
                                </li>
                            )
                        })}
                </ul>
            </div>
        </>
    )
}