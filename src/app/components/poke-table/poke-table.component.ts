import { Component, OnInit, ViewChild } from '@angular/core';
import { PokemonService } from 'src/app/services/pokemon.service';

import { Router } from '@angular/router';


@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image', 'name'];
  data: any[] = [];

  alert=false;
  pokemons = [];

  constructor(private pokemonService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    
    let pokemonData;
    for (let i = 1; i <= 150; i++) {
      this.pokemonService.getPokemons(i).subscribe(
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
  setfavo(row){
    console.log(row);
    let datas=localStorage.getItem('saveData')
    var saveData = JSON.parse(localStorage.getItem('saveData')||"[]") ||[];

    saveData.push(row.id);

    localStorage.setItem('saveData', JSON.stringify(saveData));
      localStorage.saveData = JSON.stringify(saveData);
   
      this.alert=true;
      window.setTimeout(()=>{
        this.alert = false}, 2000);
   

    
    
  }
  
}

