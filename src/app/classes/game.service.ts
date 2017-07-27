import { Injectable, EventEmitter }    from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { PlayerService } from './player.service';
import { TrainService } from './train.service';
import { GameServices } from './game.services';
import { Player } from './player';

@Injectable()
export class GameService {
	playerId = 0;
	player: Player;
  	services: GameServices;
  	dataReadyEvent: EventEmitter<Player>;

	constructor(private playerService: PlayerService, private trainService: TrainService) {
		this.dataReadyEvent = new EventEmitter();

		this.services = {playerService, trainService};

		this.player = new Player(this.services);
		this.player.populate(this.playerId).then((promise) => {
			console.log("-------");
			console.log(this.player);
			console.log("_______");

			this.dataReadyEvent.emit(this.player);
		});

		//console.log(this.player.populate(this.playerId));
	}
}