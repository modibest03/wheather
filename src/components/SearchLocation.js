import Form from "./Form";
import "./SearchLocation.scss";
import CloseIcon from "@material-ui/icons/Close";

function SearchLocation({ setSearch }) {
  return (
    <div className="searchlocation">
      <div
        className="searchlocation__close"
        onClick={() => setSearch("condition")}
      >
        <CloseIcon fontSize="large" />
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
