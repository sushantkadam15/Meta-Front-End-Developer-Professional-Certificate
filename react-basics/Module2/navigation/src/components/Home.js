import ReactPlayer from "react-player";
const Home = () => {
    const vidURL = "https://youtu.be/0rIjFCNay2Q";
    return(
        <div>
           <h1>You are at Home</h1>
           <ReactPlayer url={vidURL} playing="true" loop="true" muted="true" controls="false"/>

        </div>
    )
}

export default Home;