import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-modal-sound',
  templateUrl: './modal-sound.component.html',
  styleUrls: ['./modal-sound.component.css']
})
export class ModalSoundComponent implements OnInit {
  checkoutForm : FormGroup;
  submitted : boolean = false;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) {
      this.checkoutForm = this.formBuilder.group({
        soundName: ['', Validators.required],
        soundFile: ['', Validators.required]
      });
    }

  ngOnInit(): void {
  }

  onSubmit(soundData) {
    this.submitted = true;

    // stop here if form is invalid
    if (this.checkoutForm.invalid) {
      console.warn('Invalid Form');
      return;
    }
    // Process checkout data here
     console.log(soundData);

    this.activeModal.close()
  }
}
