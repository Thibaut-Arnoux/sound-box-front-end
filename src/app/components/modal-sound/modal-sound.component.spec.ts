import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalSoundComponent } from './modal-sound.component';

describe('ModalSoundComponent', () => {
  let component: ModalSoundComponent;
  let fixture: ComponentFixture<ModalSoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalSoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalSoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
