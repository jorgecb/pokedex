import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-poke-favo',
  templateUrl: './poke-favo.component.html',
  styleUrls: ['./poke-favo.component.scss']
})
export class PokeFavoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image', 'name'];
  data: any[] = [];
  pokemons = [];
  alert=false;
  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.data=[];
    let pokemonData;
    var saveData = JSON.parse(localStorage.getItem('saveData')||"[]") ||[];
    for (let i = 0; i <=saveData.length; i++) {
      this.pokemonService.getPokemons(saveData[i]).subscribe(
        res => {
          pokemonData = {
            position: i,
            id: res.id,
            image: res.sprites.front_default,
            name: res.name
          };

          this.data.push(pokemonData);
        
        },
        err => {
          console.log(err);
        }
      );
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
   
  }


  getRow(row){
    //console.log(row);
    this.router.navigateByUrl(`/pokeDetail/${row.id}`)
  }
  removefavo(row){
   

    var saveData = JSON.parse(localStorage.getItem('saveData') || "[]") || [];

    saveData.splice(saveData.indexOf(row.id), 1)
    localStorage.setItem('saveData', JSON.stringify(saveData));
    localStorage.saveData = JSON.stringify(saveData);

    this.getPokemons();
    this.alert = true;
    window.setTimeout(() => {
      this.alert = false
    }, 2000);
   

  }

}
