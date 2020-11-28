import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, Validators  } from '@angular/forms';

@Component({
  selector: 'app-modal-person',
  templateUrl: './modal-person.component.html',
  styleUrls: ['./modal-person.component.css']
})
export class ModalPersonComponent implements OnInit {
  // closeResult = '';
  checkoutForm;
  submitted = false;

  constructor(
    public activeModal: NgbActiveModal,
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
    //this.checkoutForm.reset();
    this.activeModal.close()

    console.warn('Your order has been submitted', personData);
  }
/**
  open(content) {
    console.log(content);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      console.log(`RESULT : ${result}`);
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${(reason)}`;
      console.log(`REASON ${reason}`);
    });
  }
   */
}
