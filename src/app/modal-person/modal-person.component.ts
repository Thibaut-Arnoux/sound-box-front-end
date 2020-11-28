import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder } from '@angular/forms';



@Component({
  selector: 'app-modal-person',
  templateUrl: './modal-person.component.html',
  styleUrls: ['./modal-person.component.css']
})
export class ModalPersonComponent implements OnInit {
  // closeResult = '';
  checkoutForm;

  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder) {
      this.checkoutForm = this.formBuilder.group({
        name: '',
        pseudo: ''
      });
     }

  ngOnInit(): void {
  }

  onSubmit(personData) {
    // Process checkout data here
    this.checkoutForm.reset();

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
