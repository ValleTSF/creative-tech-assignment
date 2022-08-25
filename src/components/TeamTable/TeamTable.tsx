import React, { Suspense } from "react";
import { TeamMember } from "../../types";
import * as S from "./styled";
const TeamCard = React.lazy(() => import("../TeamCard"));

interface TeamTableProps {
  teamList: TeamMember[];
  displayMode: "grid" | "list";
}

export default function TeamTable({ teamList, displayMode }: TeamTableProps) {
  if (!teamList) {
    return null;
  }

  if (displayMode === "list") {
    return null;
  }
  return (
    <S.TableContainer>
      {teamList.map((member) => {
        return (
          <Suspense fallback={<div>Loading</div>}>
            <TeamCard
              firstName={member.name.first}
              lastName={member.name.last}
              location={member.location.city}
              image={member.picture.large}
              email={member.email}
              phone={member.phone}
            />
          </Suspense>
        );
      })}
    </S.TableContainer>
  );
}
