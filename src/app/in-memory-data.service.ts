import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const players = [
      { id: 0,  name: 'Mysterarts', idTrains: [0] },
      { id: 1, name: 'NicolasJ', idTrains: [1] }
    ];

    const trains = [
      { id: 0,  name: 'Le Pacifique', idWagons: [0, 2, 2] },
      { id: 1, name: 'Le Géant', idWagons: [1, 2, 3] }
    ];

    const wagons = [
      { id: 0, type: 'loco', name: 'Pacific 231 G', power: 100, wagonsMax:6 },
      { id: 1, type: 'loco', name: 'Diesel Série 59', power: 200, wagonsMax:9 }
    ]

    return {players, trains};
  }
}