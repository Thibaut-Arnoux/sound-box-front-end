import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { IPerson, Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-modal-person',
  templateUrl: './modal-person.component.html',
  styleUrls: ['./modal-person.component.css']
})
export class ModalPersonComponent implements OnInit {
  checkoutForm : FormGroup;
  submitted : boolean = false;
  person : IPerson;

  constructor(
    public activeModal: NgbActiveModal,
    private personService: PersonService,
    private router: Router,
    private formBuilder: FormBuilder) {
      this.checkoutForm = this.formBuilder.group({
        name: ['', Validators.required],
        pseudo: ['', Validators.required]
      });
     }

  ngOnInit(): void {
  }

  onSubmit(personData) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
      console.warn('Invalid Form');
      return;
    }
    // Process checkout data here
    this.person = new Person(undefined, personData.name, personData.pseudo);
    this.personService.createPerson(this.person)
    .then(
      (response) => {
        console.log(response);
        this.activeModal.close();
        this.router.navigate(['/']);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
