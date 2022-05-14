import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const styleH = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "50px",
  fontFamily: "Arial",
};

const styleP = {
  color: "white",
  backgroundColor: "DodgerBlue",
  padding: "10px",
  fontFamily: "Arial",
};

const Welcome = () => {
  return (
    <div
      style={{
        backgroundColor: "lightGreen",
        width: 850,
        height: 800,
        textOverflow: "hidden",
      }}
    >
        <Navbar />

      <div>
        <h1>
          <center style={styleH}>SMITSP</center>
        </h1>
      </div>
      <div style={styleP}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit veritatis
          ipsum numquam aspernatur illo sint? Facere perspiciatis molestiae in
          beatae maxime maiores minima sequi dolorum, asperiores modi, aperiam,
          magni cupiditate!
        </p>
        <button><Link to = "../../Signup" >Signup</Link></button>
      </div>
    </div>
  );
};

export default Welcome;
