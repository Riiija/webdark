import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSalarieComponent } from './add-salarie.component';

describe('AddSalarieComponent', () => {
  let component: AddSalarieComponent;
  let fixture: ComponentFixture<AddSalarieComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSalarieComponent]
    });
    fixture = TestBed.createComponent(AddSalarieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
