import "./TeamPage.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";

export default function TeamPage() {
  return (
    <div className="page-container">
      <h2 className="page-title">Meet the Team</h2>
      <div className="input-container">
        <SearchIcon />
        <input className="input" type="text" name="name" />
      </div>
    </div>
  );
}
