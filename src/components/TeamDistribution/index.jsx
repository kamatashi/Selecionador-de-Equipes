import React, { useState } from "react";

const TeamDistribution = () => {
  const [peopleList, setPeopleList] = useState("");
  const [numTeams, setNumTeams] = useState(0);
  const [teams, setTeams] = useState([]);
  const [peoplePerTeam, setPeoplePerTeam] = useState(0);

  const handlePeopleListChange = (e) => {
    setPeopleList(e.target.value);
  };

  const handleNumTeamsChange = (e) => {
    setNumTeams(e.target.value);
  };

  function removeNumbersFromString(inputString) {
    // Utiliza uma expressão regular para remover os números
    return inputString.replace(/\d/g, "");
  }

  const calculateTeams = () => {
    const peopleArray = peopleWtthoutNumbers
      .split(". ")
      .map((name) => name.trim());
    const maxPeoplePerTeam = Math.ceil(peopleArray.length / 7); // Pode ajustar o limite conforme necessário
    setPeoplePerTeam(maxPeoplePerTeam);

    // Calcula o número de times com base no limite de pessoas por time
    const calculatedNumTeams = Math.ceil(peopleArray.length / maxPeoplePerTeam);
    setNumTeams(calculatedNumTeams);
  };

  const distributeTeams = () => {
    const peopleArray = peopleList.split(". ").map((name) => name.trim());
    const shuffledPeople = peopleArray.sort(() => Math.random() - 0.5);

    const distributedTeams = Array.from({ length: numTeams }, (_, index) => ({
      teamNumber: index + 1,
      members: shuffledPeople.slice(
        index * Math.ceil(peopleArray.length / numTeams),
        (index + 1) * Math.ceil(peopleArray.length / numTeams),
      ),
    }));

    setTeams(distributedTeams);
  };

  return (
    <div>
      <h1>Distribuição de times</h1>
      <label>
        Lista com os participantes:
        <input
          type="text"
          value={peopleList}
          onChange={handlePeopleListChange}
        />
      </label>
      <br />
      <label>
        Número de times:
        <input type="number" value={numTeams} onChange={handleNumTeamsChange} />
        <button onClick={calculateTeams}>Número ideal de times</button>
      </label>
      <br />
      <button onClick={distributeTeams}>Clique para destribuir</button>

      {teams.map((team) => (
        <div key={team.teamNumber}>
          <h2>Time {team.teamNumber}</h2>
          <ul>
            {team.members.map((member, index) => (
              <li key={index}>{removeNumbersFromString(member)}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamDistribution;
