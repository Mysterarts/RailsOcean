import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const trains = [
      { id: 0,  name: 'Pacific 231 G', power: 100, wagonsMax:6 },
      { id: 1, name: 'Diesel Série 59', power: 200, wagonsMax:9 }
    ];
    return {trains};
  }
}