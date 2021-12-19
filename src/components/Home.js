import Button from "./Button";
import Logotype from "./Logo";

const Home = () => {
    return (
        <div className="header">
            <Logotype></Logotype>
            <div className="container-article">
                <h1>Din lokala hovslagare</h1>
                <p>Facilisis eu faucibus diam cursus pulvinar consectetur purus sem felis, mauris consectetur nisl vitae gravida 
                    ultricies sem condimentum pat laoreet pharetra.
                </p>
                <div className="button-container ">
                    <Button>BOKA TID</Button>
                </div>
            </div>
        </div>
    )
}

export default Home; 