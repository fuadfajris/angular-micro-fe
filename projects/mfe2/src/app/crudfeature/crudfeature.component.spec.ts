import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudfeatureComponent } from './crudfeature.component';

describe('CrudfeatureComponent', () => {
  let component: CrudfeatureComponent;
  let fixture: ComponentFixture<CrudfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudfeatureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
