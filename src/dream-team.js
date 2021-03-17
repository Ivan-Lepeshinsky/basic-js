const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  let team = "";
  let name = "";
  letter = [];
  if (Array.isArray(members)) {
    for (i = 0; i < members.length; i++) {
      if (typeof members[i] == "string") {
        name = members[i];
        letter = name.trim().split("");
        team += letter.shift();
      }
    }
    team = team.toUpperCase().split("").sort().join("");
    return team;
  } else return false;
};
