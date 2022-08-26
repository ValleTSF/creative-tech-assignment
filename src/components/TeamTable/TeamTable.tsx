import React, { Suspense } from "react";
import { MutatedTeamMember, TeamMember } from "../../types";
import TeamBar from "../TeamBar";
import * as S from "./styled";
const TeamCard = React.lazy(() => import("../TeamCard"));

interface TeamTableProps {
  teamList: MutatedTeamMember[];
  displayMode: "grid" | "list";
}

export default function TeamTable({
  teamList,
  displayMode,
}: TeamTableProps): JSX.Element {
  if (!teamList) {
    return <div></div>;
  }

  if (displayMode === "list") {
    return (
      <S.BarTableContainer>
        {teamList.map((member) => {
          return (
            <Suspense
              key={member.id.value + member.email}
              fallback={<div>Loading</div>}
            >
              <TeamBar
                firstName={member.name.first}
                lastName={member.name.last}
                location={member.location.city}
                image={member.picture.large}
                email={member.email}
                phone={member.phone}
                color={member.color}
              />
            </Suspense>
          );
        })}
      </S.BarTableContainer>
    );
  }
  return (
    <S.CardTableContainer>
      {teamList.map((member) => {
        return (
          <Suspense
            key={member.id.value + member.email}
            fallback={<div>Loading</div>}
          >
            <TeamCard
              firstName={member.name.first}
              lastName={member.name.last}
              location={member.location.city}
              image={member.picture.large}
              email={member.email}
              phone={member.phone}
              color={member.color}
            />
          </Suspense>
        );
      })}
    </S.CardTableContainer>
  );
}
