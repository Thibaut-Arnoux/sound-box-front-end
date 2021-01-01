import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { IPerson, Person } from '../../models/person.model';
import { PersonService } from '../../services/person.service';

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
     console.log(this.person);
     this.personService.createPerson(this.person);

    this.activeModal.close()
  }
}
