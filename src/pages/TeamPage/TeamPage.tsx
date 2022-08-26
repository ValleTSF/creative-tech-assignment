import * as S from "./styled";
import { ReactComponent as SearchIcon } from "../../assets/icons/search-icon.svg";
import { ReactComponent as SortingIcon } from "../../assets/icons/sorting-icon.svg";
import { ReactComponent as ListIcon } from "../../assets/icons/list-icon.svg";
import { ReactComponent as ThumbnailIcon } from "../../assets/icons/thumbnail-icon.svg";
import { useEffect, useState } from "react";
import { DisplayMode, MutatedTeamMember, SortOrder } from "../../types";
import TeamTable from "../../components/TeamTable";
import { getColor, getTeamMembers, searchList, sortList } from "../../utils";

export default function TeamPage(): JSX.Element {
  const [teamList, setTeamList] = useState<MutatedTeamMember[]>();
  const [filteredList, setFilteredList] = useState<MutatedTeamMember[]>();
  const [sortOrder, setSortOrder] = useState<SortOrder>("ascending");
  const [displayMode, setDisplayMode] = useState<DisplayMode>("grid");

  useEffect(() => {
    getTeamMembers().then((response) => {
      const mutatedResults = response.map((member) => {
        return { ...member, color: getColor() };
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
    <S.PageContainer data-testid="team-page">
      <S.PageTitle role="heading" data-testid="page-title">
        Meet the Team
      </S.PageTitle>
      <S.ContentContainer>
        <S.UtilityContainer>
          <SortingIcon role="sorting" onClick={onSortOrderClick} />
          <S.InputContainer>
            <SearchIcon />
            <S.SearchInput
              role="search"
              className="input"
              type="text"
              onChange={onInputChange}
            />
          </S.InputContainer>
          {displayMode === "grid" ? (
            <ListIcon
              role="button"
              data-testid="list-icon"
              onClick={() => setDisplayMode("list")}
              className="view-icon"
            />
          ) : (
            <ThumbnailIcon
              role="button"
              data-testid="thumbnail-icon"
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
