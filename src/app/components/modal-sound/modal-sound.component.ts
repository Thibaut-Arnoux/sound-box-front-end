import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { IPerson } from '../../models/person.model';
import {ISound, Sound } from '../../models/sound.model';
import { HttpClient } from '@angular/common/http';


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
    private http: HttpClient,
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
    const formData = new FormData();
    //formData.append('soundName', this.checkoutForm.get('soundNameForm').value);
    //formData.append('personId', this.checkoutForm.get('personForm').value);
    formData.append('sound', JSON.stringify(sound));
    formData.append('audio', this.checkoutForm.get('soundFileForm').value);

    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
      console.warn('Invalid Form');
      return;
    }
    // Process checkout data here
    this.http.post('http://localhost:3000/api/sound', formData).toPromise()
    .then((response : any) => {
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    });

    this.activeModal.close()
  }
}
