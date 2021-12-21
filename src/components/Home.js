import React, {useEffect, useState} from "react";
import Button from "./Button";
import Logotype from "./Logo";
import PopUp from "./Popup";

const Home = () => {
    const [open, setOpen] = useState(false);

    useEffect (() => {
    document.addEventListener("mousedown", () => {
        setOpen(false);
        });
    });

    return (
        <div className="header">
            <Logotype></Logotype>
            <div className="container-article">
                <h1>Din lokala hovslagare</h1>
                <p>Facilisis eu faucibus diam cursus pulvinar consectetur purus sem felis, mauris consectetur nisl vitae gravida 
                    ultricies sem condimentum pat laoreet pharetra.
                </p>
                <div className="button-container ">
                    <Button OnClick= {() => setOpen(!open)
                }>BOKA TID</Button>
                </div>
            </div>
            {
                open?<PopUp/>:null
            }
        </div>
    )
}

export default Home; 