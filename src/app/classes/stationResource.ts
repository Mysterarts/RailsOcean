import 'rxjs/add/operator/toPromise';

import { GameServices } from './game.services';

export class StationResource {
	id: number;
	idResource: number;
	quantity: number;

	constructor(private services: GameServices) {
		
	}
}
