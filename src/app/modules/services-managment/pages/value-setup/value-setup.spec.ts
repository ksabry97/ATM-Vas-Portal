import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueSetup } from './value-setup';

describe('ValueSetup', () => {
  let component: ValueSetup;
  let fixture: ComponentFixture<ValueSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueSetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueSetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
