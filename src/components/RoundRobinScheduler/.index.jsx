import React, { useState } from 'react';

const RoundRobinScheduler = () => {
  const [numTeams, setNumTeams] = useState(4); // Altere conforme necessário
  const [matches, setMatches] = useState([]);

  const generateRoundRobinMatches = (numTeams) => {
    const matches = [];

    const isOdd = numTeams % 2 !== 0;

    if (isOdd) {
      numTeams++;
    }

    const tempTeams = Array.from({ length: numTeams - 1 }, (_, index) => index + 2);

    for (let i = 1; i <= numTeams; i++) {
      const roundMatches = [];

      for (let j = 0; j < numTeams / 2; j++) {
        const team1 = i;
        const team2 = tempTeams[j];
        roundMatches.push({ team1, team2 });
      }

      matches.push(roundMatches);
      tempTeams.unshift(tempTeams.pop());
    }

    if (isOdd) {
      matches.pop();
    }

    return matches;
  };

  const handleNumTeamsChange = (e) => {
    const newNumTeams = parseInt(e.target.value, 10);
    setNumTeams(newNumTeams);
  };

  const handleGenerateMatches = () => {
    const generatedMatches = generateRoundRobinMatches(numTeams);
    setMatches(generatedMatches);
  };

  return (
    <div>
      <h1>Round Robin Scheduler</h1>
      <label>
        Number of Teams:
        <input type="number" value={numTeams} onChange={handleNumTeamsChange} />
      </label>
      <button onClick={handleGenerateMatches}>Generate Matches</button>

      <h2>Matches:</h2>
      <ul>
        {matches.map((round, roundIndex) => (
          <li key={roundIndex}>
            <strong>Round {roundIndex + 1}:</strong>
            <ul>
              {round.map((match, matchIndex) => (
                <li key={matchIndex}>
                  Team {match.team1} vs Team {match.team2}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RoundRobinScheduler;
