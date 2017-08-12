import { PlayerService } from './player.service';
import { TrainService } from './train.service';
import { WagonService } from './wagon.service';
import { ResourceService } from './resource.service';

export class GameServices {
  playerService: PlayerService;
  trainService: TrainService;
  wagonService: WagonService;
  resourceService: ResourceService;
}
