import { Component } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent {
  constructor(private heroService: HeroService) {}

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  }

  heroes: Hero[] = [];

  selectedHero?: Hero;

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  ngOnInit(): void {
    this.getHeroes();
  }
  
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
