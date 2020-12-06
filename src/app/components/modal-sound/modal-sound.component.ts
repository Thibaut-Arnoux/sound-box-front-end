import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { IPerson } from '../../models/person.model';

@Component({
  selector: 'app-modal-sound',
  templateUrl: './modal-sound.component.html',
  styleUrls: ['./modal-sound.component.css']
})
export class ModalSoundComponent implements OnInit {
  checkoutForm : FormGroup;
  submitted : boolean = false;
  personList : IPerson[] = [{
    id: 1,
    name: 'Thibaut',
    pseudo: 'Vlamz'
  },
  {
    id: 2,
    name: 'Theo',
    pseudo: 'Yene'
  }] ;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) {
      this.checkoutForm = this.formBuilder.group({
        soundNameForm: ['', Validators.required],
        soundFileForm: ['', Validators.required],
        personForm: ['', Validators.required]
      });
    }

  ngOnInit(): void {
  }

  onSubmit(soundData) {
    this.submitted = true;
    const formData = new FormData();
    formData.append('soundName', this.checkoutForm.get('soundNameForm').value);
    formData.append('soundFile', this.checkoutForm.get('soundFileForm').value);
    formData.append('personId', this.checkoutForm.get('personForm').value);

    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
      console.warn('Invalid Form');
      return;
    }
    // Process checkout data here
     console.log(soundData);
     console.log('---------------');
     console.log(formData);

    this.activeModal.close()
  }
}
