import { Pipe, PipeTransform } from '@angular/core';
import { GameService } from '../classes/game.service';

@Pipe({name: 'resource'})

export class ResourcePipe implements PipeTransform {

	constructor(private services: GameService) {
		
	}

	transform(value: number): string {
		return this.services.resources.find(res => res.id === value).name;
	}
}