const team = {
    _players: [
      {
        firstName: 'Pablo',
        lastName: 'Sanchez',
        age: 25
      },
      {
        firstName: 'Kornkawin',
        lastName: 'Bijayayothin',
        age: 29
      },
      {
        firstName: 'John',
        lastName: 'Doe',
        age: 27
      }
    ],
  
    _games: [
      {
        opponent: 'PSG',
        teamPoints: 2,
        opponentPoints: 0
      },
      {
        opponent: 'LIVERPOOL',
        teamPoints: 1,
        opponentPoints: 0
      },
      {
        opponent: 'ARSENAL',
        teamPoints: 0,
        opponentPoints: 1
      }
    ],
  
    // getter methods
    get players() {
      return this._players;
    },
    get games() {
      return this._games;
    },
  
    // action
    addPlayer(firstName, lastName, age) {
      const input = {
        firstName: firstName, 
        lastName: lastName, 
        age: age
      };
      this._players.push(input);
    },
    addGame(opp, myPts, oppPts) {
      const game = {
        opponent: opp,
        teamPoints: myPts,
        opponentPoints: oppPts
      };
      this._games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  team.addGame('REAL MADRID', 1, 1)
  console.log(team.games);
  
  
  
  