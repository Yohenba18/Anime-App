import React, { useContext, useEffect, useState } from 'react';
import { SearchContext } from '../context/search';

function Moreinfo() {

    const search = useContext(SearchContext);
    const [dataExist, setDataExist] = useState(true);

    useEffect(() => {
        if(search.singleData === undefined ||  Object.keys(search.singleData).length === 0){
            try{
                search.setSingle(JSON.parae(localStorage.getItem('singleData')))
                setDataExist(true);
            }catch(e){
                console.log(e);
                setDataExist(false)
            } 
        }
        console.log(search);
    },[search])
    return (
        <div>
            {dataExist ? (<h1>More Info</h1>) : (<h1>nope</h1>)}
        </div>
    )
}

export default Moreinfo
