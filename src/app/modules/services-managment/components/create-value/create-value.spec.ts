import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateValue } from './create-value';

describe('CreateValue', () => {
  let component: CreateValue;
  let fixture: ComponentFixture<CreateValue>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateValue]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateValue);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
