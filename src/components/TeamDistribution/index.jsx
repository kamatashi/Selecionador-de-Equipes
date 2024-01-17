import React, { useState } from 'react';

const TeamDistribution = () => {
  const [peopleList, setPeopleList] = useState('');
  const [numTeams, setNumTeams] = useState(0);
  const [teams, setTeams] = useState([]);

  const handlePeopleListChange = (e) => {
    setPeopleList(e.target.value);
  };

  const handleNumTeamsChange = (e) => {
    setNumTeams(e.target.value);
  };

  const distributeTeams = () => {
    const peopleArray = peopleList.split('. ').map((name) => name.trim());
    const shuffledPeople = peopleArray.sort(() => Math.random() - 0.5);

    const distributedTeams = Array.from({ length: numTeams }, (_, index) => ({
      teamNumber: index + 1,
      members: shuffledPeople.slice(index * Math.ceil(peopleArray.length / numTeams), (index + 1) * Math.ceil(peopleArray.length / numTeams)),
    }));

    setTeams(distributedTeams);
  };

  return (
    <div>
      <h1>Destribuição de times</h1>
      <label>
        Lista com os participantes:
        <input type="text" value={peopleList} onChange={handlePeopleListChange} />
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
          <h2>Time {team.teamNumber}</h2>
          <ul>
            {team.members.map((member, index) => (
              <li key={index}>{member}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TeamDistribution;
