import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPersonComponent } from '../modal-person/modal-person.component';
import { ModalSoundComponent } from '../modal-sound/modal-sound.component';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  constructor(public modalService: NgbModal) { }

  ngOnInit(): void {
  }

  openModalPerson(){
    this.modalService.open(ModalPersonComponent);
  }

  openModalSound(){
    this.modalService.open(ModalSoundComponent);
  }
}
