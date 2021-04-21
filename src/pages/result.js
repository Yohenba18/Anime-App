import React, { useEffect,useContext, useState } from 'react';
import { SearchContext } from "../context/search";


const Result = () => {
    const search = useContext(SearchContext);
    const [dataExists, setDataExists] = useState(false);

    useEffect(()=> {
        if(search.animeData === undefined || search.animeData.length === 0) {
            try{
                search.setData(JSON.parse(localStorage.getItem('myData')));
                setDataExists(true);
            }catch(err){
                console.log(err);
                setDataExists(false);
            }
        console.log(search.animeData);
        }
    },[search])
    return (
        <div>
            {(dataExists && 'Data Exists') || 'data does not exists'}
        </div>
    )
}

export default Result
