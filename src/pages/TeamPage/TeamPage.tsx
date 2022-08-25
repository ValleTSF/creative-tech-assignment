import * as S from "./styled";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as SortingIcon } from "../../assets/icons/sorting-icon.svg";
import { ReactComponent as ListIcon } from "../../assets/icons/list-icon.svg";
import { ReactComponent as ThumbnailIcon } from "../../assets/icons/thumbnail-icon.svg";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  DisplayMode,
  MutatedTeamMember,
  SortOrder,
  TeamMember,
} from "../../types";
import TeamTable from "../../components/TeamTable";
import { getColor, searchList, sortList } from "../../utils";

export default function TeamPage(): JSX.Element {
  const [teamList, setTeamList] = useState<MutatedTeamMember[]>();
  const [filteredList, setFilteredList] = useState<MutatedTeamMember[]>();
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascending");
  const [displayMode, setDisplayMode] = useState<DisplayMode>("grid");

  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=50").then(({ data }) => {
      const { results }: { results: TeamMember[] } = data;

      const mutatedResults = results.map((result) => {
        return { ...result, color: getColor() };
      });

      setTeamList(mutatedResults);
      setFilteredList(mutatedResults);
    });
  }, []);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (teamList) {
      setFilteredList(searchList(e.target.value, teamList));
    }
  };

  const onSortOrderClick = () => {
    if (filteredList) {
      setFilteredList(sortList(filteredList, sortOrder));

      sortOrder === "ascending"
        ? setSortOrder("descending")
        : setSortOrder("ascending");
    }
  };

  return (
    <S.PageContainer>
      <S.PageTitle>Meet the Team</S.PageTitle>
      <S.ContentContainer>
        <S.UtilityContainer>
          <SortingIcon onClick={onSortOrderClick} />
          <S.InputContainer>
            <SearchIcon />
            <S.SearchInput
              className="input"
              type="text"
              onChange={onInputChange}
            />
          </S.InputContainer>
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
        </S.UtilityContainer>
        {filteredList && (
          <TeamTable displayMode={displayMode} teamList={filteredList} />
        )}
      </S.ContentContainer>
    </S.PageContainer>
  );
}
