import { Injectable }    from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { PlayerService } from './player.service';
import { Player } from './player';

@Injectable()
export class GameService {
	playerId = 0;
	player: Player;

	constructor(private playerService: PlayerService) {
		this.player = new Player(playerService);
		this.player.populate(this.playerId).then((promise) => {
			console.log("-------");
			console.log(this.player);
			console.log("_______");
		});

		//console.log(this.player.populate(this.playerId));
	}
}