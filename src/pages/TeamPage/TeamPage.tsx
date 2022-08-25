import "./TeamPage.css";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as SortingIcon } from "../../assets/icons/sorting-icon.svg";
import { ReactComponent as ListIcon } from "../../assets/icons/list-icon.svg";
import { ReactComponent as ThumbnailIcon } from "../../assets/icons/thumbnail-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import { MutatedTeamMember, TeamMember } from "../../types";
import TeamTable from "../../components/TeamTable";
import { searchList } from "../../utils";

const teamColors = ["#E7CDAB", "#E3D5C9", "#A7B8A8"];

export default function TeamPage(): JSX.Element {
  const [teamList, setTeamList] = useState<MutatedTeamMember[]>();
  const [filteredList, setFilteredList] = useState<MutatedTeamMember[]>();
  const [displayMode, setDisplayMode] = useState<"grid" | "list">("grid");

  let counter = 0;

  const getColor = () => {
    const color = teamColors[counter];
    if (counter === 2) {
      counter = 0;
    } else {
      counter++;
    }
    return color;
  };

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then(({ data }) => {
      const { results }: { results: TeamMember[] } = data;

      const mutatedResults = results.map((result) => {
        return { ...result, color: getColor() };
      });

      setTeamList(mutatedResults);
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
