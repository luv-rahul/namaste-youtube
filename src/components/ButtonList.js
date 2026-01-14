import Button from "./Button";
import { listOfButtons } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex">
      {listOfButtons.map((button,index) => (
        <Button btnName={button} key={index}/>
      ))}
    </div>
  );
};

export default ButtonList;
