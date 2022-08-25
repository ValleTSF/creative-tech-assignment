import { TeamMember } from "../types";

export const searchList = (
  input: string,
  teamList: TeamMember[]
): TeamMember[] => {
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
