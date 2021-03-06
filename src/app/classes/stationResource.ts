import 'rxjs/add/operator/toPromise';

import { GameServices } from './game.services';

export class StationResource {
	id: number;
	idResource: number;
	type: string;
	quantity: number;
	price: number;
	quantityOwned: number;

	constructor(private services: GameServices) {
		
	}
}
