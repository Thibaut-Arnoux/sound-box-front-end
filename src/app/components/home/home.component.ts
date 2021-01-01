import { Component, OnInit } from '@angular/core';
import { ISound } from '../../models/sound.model';
import { SoundService } from '../../services/sound.service';
import { IPerson } from '../../models/person.model';
import { PersonService} from '../../services/person.service';
import {Router, NavigationEnd} from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeList : any = [];
  navigationSubscription;

  constructor(
    private soundService: SoundService,
    private personService: PersonService,
    private router: Router,
  ) { 
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.refreshList();
      }
    });
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
  }

  refreshList = () => {
    // Reset list
    this.homeList = [];

    // Get Data
    this.personService.getAllPerson()
    .then(
      (persons: IPerson[]) => {
        for(let person of persons){
          let elemHomeList = {
            person : person,
            sounds: []
          };
          this.soundService.getAllSoundByPerson(person.id)
          .then(
            (sounds : ISound[]) => {
              elemHomeList.sounds = sounds;
              this.homeList.push(elemHomeList);
              this.homeList.sort((a, b) => (a.person.name.toUpperCase() > b.person.name.toUpperCase()) ? 1 : -1);
            },
            (error) => {
              console.log(error);
            }
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
