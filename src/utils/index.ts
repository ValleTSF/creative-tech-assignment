import { MutatedTeamMember, SortOrder } from "../types";

const teamColors = ["#E7CDAB", "#E3D5C9", "#A7B8A8"];

let counter = 0;

export const getColor = () => {
  const color = teamColors[counter];
  if (counter === 2) {
    counter = 0;
  } else {
    counter++;
  }
  return color;
};

export const sortList = (
  teamList: MutatedTeamMember[],
  sortOrder: SortOrder
) => {
  if (sortOrder === "ascending") {
    return teamList.sort((a, b) =>
      a.name.first < b.name.first ? 1 : a.name.first > b.name.first ? -1 : 0
    );
  } else if (sortOrder === "descending") {
    return teamList.sort((a, b) =>
      a.name.first < b.name.first ? -1 : a.name.first > b.name.first ? 1 : 0
    );
  }
};

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
