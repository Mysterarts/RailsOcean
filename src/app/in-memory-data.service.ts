import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {

    const players = [
      { id: 0,  name: 'Mysterarts', idTrains: [0] },
      { id: 1, name: 'NicolasJ', idTrains: [1] }
    ];

    const trains = [
      { id: 0,  name: 'Le Pacifique', idStation:0 },
      { id: 1, name: 'Le Géant', idStation:0 }
    ];

    const wagons = [
      { id: 0, idTrain:0, idWagon:0, idResource:0, quantity:100 },
      { id: 1, idTrain:0, idWagon:2, idResource:1, quantity:50 },
      { id: 2, idTrain:0, idWagon:2, idResource:1, quantity:80 },
      { id: 2, idTrain:1, idWagon:2, idResource:1, quantity:80 }
    ];

    const stations = [
      { id: 0, name: 'Creuzo' },
      { id: 1, name: 'Reuvar' },
      { id: 2, name: 'Sinpier' },
      { id: 3, name: 'lezo' }
    ];

    const sections = [
      { id: 0, from: 0, to: 1, distance: 100, risk:0 },
      { id: 1, from: 0, to: 2, distance: 150, risk:1 },
      { id: 2, from: 1, to: 3, distance: 200, risk:2 },
      { id: 3, from: 3, to: 1, distance: 100, risk:0 },
      { id: 4, from: 2, to: 3, distance: 400, risk:4 }
    ];

    const stationResources = [
      { id: 0, idStation: 0, idResource:0, type: 'sell', quantity: 100 },
      { id: 0, idStation: 0, idResource:1, type: 'sell', quantity: 200 },
      { id: 0, idStation: 1, idResource:0, type: 'sell', quantity: 1000 },
      { id: 0, idStation: 2, idResource:0, type: 'sell', quantity: 100 },
      { id: 0, idStation: 2, idResource:2, type: 'sell', quantity: 300 },
      { id: 0, idStation: 0, idResource:2, type: 'buy',  quantity: 100 },
      { id: 0, idStation: 1, idResource:2, type: 'buy',  quantity: 300 }
    ];

    const stationWagons = [
      { id: 0, idStation: 0, idWagon:0, quantity: 1, price: 1000 },
      { id: 0, idStation: 0, idWagon:2, quantity: 1, price: 100 },
      { id: 0, idStation: 0, idWagon:3, quantity: 1, price: 200 },
      { id: 0, idStation: 1, idWagon:2, quantity: 1, price: 100 },
      { id: 0, idStation: 2, idWagon:1, quantity: 1, price: 800 }
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
      { id: 2, type: 'liquid',  name: 'water', value:1, risks:[]}
    ]

    return {players, trains, wagons, stations, sections, stationResources, stationWagons, wagonsData, resourcesData};
  }
}