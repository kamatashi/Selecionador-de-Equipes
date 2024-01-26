const calculateTeams = () => {
  const limitTeams = 7;
  const peopleArray = removeNumber(peopleList)
    .split(" ")
    .map((name) => name.trim());
  const maxPeoplePerTeam = Math.ceil(peopleArray.length / limitTeams);

  setPeoplePerTeam(maxPeoplePerTeam);

  // Calcula o número de times com base no limite de pessoas por time
  const calculatedNumTeams = Math.ceil(peopleArray.length / maxPeoplePerTeam);
  setNumTeams(calculatedNumTeams);
};


