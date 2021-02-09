import Form from "./Form";
import "./SearchLocation.scss";
import { BsFillXCircleFill } from "react-icons/bs";

function SearchLocation({ setSearch }) {
  return (
    <div className="searchlocation">
      <div
        className="searchlocation__close"
        onClick={() => setSearch("condition")}
      >
        {/* <CloseIcon fontSize="large" /> */}
        <BsFillXCircleFill fontSize="3rem" color="#e7e7eb" />
      </div>
      <Form />
      <ul>
        <li>London</li>
        <li>Barcelona</li>
      </ul>
    </div>
  );
}

export default SearchLocation;
