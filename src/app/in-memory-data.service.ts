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
      { id: 0, idTrain:0, idWagon:0, resource:0, quantity:100 },
      { id: 1, idTrain:0, idWagon:2, resource:1, quantity:50 },
      { id: 2, idTrain:0, idWagon:2, resource:1, quantity:80 }
    ];

    const wagonsData = [
      { id: 0, type: 'loco', name: 'Pacific 231 G', power: 100, wagonsMax:6 },
      { id: 1, type: 'loco', name: 'Diesel Série 59', power: 200, wagonsMax:9 },
      { id: 2, type: 'cont', name: 'Container I', capacity: 100 },
      { id: 3, type: 'cont', name: 'Container II', capacity: 200 }
    ];

    const resourcesData = [
      { id: 0, type: 'solid',   name: 'coal', value:1, risks:[]},
      { id: 1, type: 'solid',   name: 'iron', value:1, risks:[]},
      { id: 2, type: 'liquid',  name: 'water', value:1, risks:[]},
    ]

    return {players, trains, wagons, wagonsData, resourcesData};
  }
}