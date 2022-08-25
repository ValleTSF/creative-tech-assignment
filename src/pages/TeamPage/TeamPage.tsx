import "./TeamPage.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as SortingIcon } from "../../assets/icons/sorting-icon.svg";
import { ReactComponent as ListIcon } from "../../assets/icons/list-icon.svg";
import { ReactComponent as ThumbnailIcon } from "../../assets/icons/thumbnail-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { TeamMember } from "../../types";
import TeamTable from "../../components/TeamTable";
import { searchList } from "../../utils";

export default function TeamPage(): JSX.Element {
  const [teamList, setTeamList] = useState<TeamMember[]>();
  const [filteredList, setFilteredList] = useState<TeamMember[]>();
  const [displayMode, setDisplayMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then(({ data }) => {
      const { results } = data;
      setTeamList(results);
    });
  }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (teamList) {
      setFilteredList(searchList(e.target.value, teamList));
    }
  };

  return (
    <div className="page-container">
      <h2 className="page-title">Meet the Team</h2>
      <div className="content">
        <div className="utility-container">
          <SortingIcon />
          <div className="input-container">
            <SearchIcon />
            <input className="input" type="text" onChange={onInputChange} />
          </div>
          {displayMode === "grid" ? (
            <ListIcon
              onClick={() => setDisplayMode("list")}
              className="view-icon"
            />
          ) : (
            <ThumbnailIcon
              onClick={() => setDisplayMode("grid")}
              className="view-icon"
            />
          )}
        </div>
        {filteredList && (
          <TeamTable displayMode={displayMode} teamList={filteredList} />
        )}
      </div>
    </div>
  );
}
