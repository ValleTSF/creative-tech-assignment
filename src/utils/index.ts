import { MutatedTeamMember } from "../types";

export const searchList = (
  input: string,
  teamList: MutatedTeamMember[]
): MutatedTeamMember[] => {
  if (input === "") {
    return teamList;
  }

  return teamList.filter((member) => {
    const concatinatedName = member.name.first + " " + member.name.last;
    const { city } = member.location;

    return (
      concatinatedName.toLowerCase().includes(input.toLowerCase()) ||
      city.toLowerCase().includes(input.toLowerCase())
    );
  });
};
