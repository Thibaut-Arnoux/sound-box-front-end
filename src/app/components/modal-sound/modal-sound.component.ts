import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { IPerson } from '../../models/person.model';
import { Sound } from '../../models/sound.model';
import { SoundService } from '../../services/sound.service';

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
    private soundService: SoundService,
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

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.checkoutForm.get('soundFileForm').patchValue(file);
      this.checkoutForm.get('soundFileForm').updateValueAndValidity();
    }
  }

  onSubmit() {
    this.submitted = true;
    const sound = new Sound();
    sound.name = this.checkoutForm.get('soundNameForm').value;
    sound.PersonId = this.checkoutForm.get('personForm').value;
    sound.fileUrl = '';

    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
      console.warn('Invalid Form');
      return;
    }
    // Process checkout data here
    this.soundService.createNewSoundWithFile(sound, this.checkoutForm.get('soundFileForm').value)
    .then(
      (response) => {
        console.log(response);
        this.activeModal.close();
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
