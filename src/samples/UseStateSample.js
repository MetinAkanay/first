import React, { useState } from 'react'

function UseStateSample() {
    //let name = "Metin"
    const [fullName, setFullName] = useState("Metin")

    const handleName = () => {
        //name = "Metin Akanay Kırdar"
        //console.log(name)
        setFullName("Metin Akanay Kırdar")
    }

    const handleName2 = () => {
        // Bu yazım şekliyle aşağıdaki aynıdır
        //if(fullName === "Metin"){
        //setFullName("Metin Akanay Kırdar")
        //}else{
        //setFullName("Metin")
        //}

        fullName === "Metin" ? setFullName("Metin Akanay Kırdar") : setFullName("Metin")

    }
    return (
        <div>
            <h1>{fullName}</h1>
            <button onClick={handleName}>Change Name</button>
            <button onClick={handleName2}>Change Name</button>
        </div>
    )
}

export default UseStateSample