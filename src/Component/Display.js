import { Textfit } from "react-textfit";
import "./Display.css";

const Display = ({ value }) => {
    return (
      <Textfit className="display" mode="single" id="display" max={80}>
        {value}
      </Textfit>
    );
  };
  
  export default Display;