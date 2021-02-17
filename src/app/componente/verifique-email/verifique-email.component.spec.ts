import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifiqueEmailComponent } from './verifique-email.component';

describe('VerifiqueEmailComponent', () => {
  let component: VerifiqueEmailComponent;
  let fixture: ComponentFixture<VerifiqueEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifiqueEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifiqueEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
