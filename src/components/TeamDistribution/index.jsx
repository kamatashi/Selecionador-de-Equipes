import React, { useState } from "react";

const TeamDistribution = () => {
  const [numPeople, setNumPeople] = useState(0);
  const [numTeams, setNumTeams] = useState(0);
  const [teams, setTeams] = useState([]);

  const handleNumPeopleChange = (e) => {
    setNumPeople(e.target.value);
  };

  const handleNumTeamsChange = (e) => {
    setNumTeams(e.target.value);
  };

  const distributeTeams = () => {
    const peopleArray = Array.from(
      { length: numPeople },
      (_, index) => index + 1,
    );
    const shuffledPeople = peopleArray.sort(() => Math.random() - 0.5);

    const distributedTeams = Array.from({ length: numTeams }, (_, index) => ({
      teamNumber: index + 1,
      members: shuffledPeople.slice(
        index * Math.ceil(numPeople / numTeams),
        (index + 1) * Math.ceil(numPeople / numTeams),
      ),
    }));

    setTeams(distributedTeams);
  };

  return (
    <div>
      <h1>Destribuição de Times</h1>
      <label>
        Número de pessoas:
        <input
          type="number"
          value={numPeople}
          onChange={handleNumPeopleChange}
        />
      </label>
      <br />
      <label>
        Número de times:
        <input type="number" value={numTeams} onChange={handleNumTeamsChange} />
      </label>
      <br />
      <button onClick={distributeTeams}>Distribute Teams</button>

      {teams.map((team) => (
        <div key={team.teamNumber}>
          <h2>Team {team.teamNumber}</h2>
          <ul>
            {team.members.map((member) => (
              <li key={member}>Person {member}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamDistribution;
