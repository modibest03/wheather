import "./Form.scss";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import SearchIcon from "@material-ui/icons/Search";

const styledbutton = {
  fontFamily: "Raleway",
  padding: "1rem",
  fontSize: "1.6rem",
  color: "#E7E7EB",
  backgroundColor: "#3c47e9",
  textTransform: "capitalize",
};

const styledinput = {
  fontFamily: "Raleway",
  padding: "1rem",
  fontSize: "1.6rem",
  color: "#616475",
  backgroundColor: "--color-blue-2",
  border: "1px solid #E7E7EB",
  marginRight: "1.2rem",
  flexGrow: 1,
};

function Form() {
  return (
    <form className="form">
      <div>
        <Input placeholder="Search location" style={styledinput}>
          <SearchIcon /> search location
        </Input>
        <Button style={styledbutton} href="#contained-buttons">
          Search
        </Button>
      </div>
    </form>
  );
}

export default Form;
