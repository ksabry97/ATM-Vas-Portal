import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicesSetup } from './services-setup';

describe('ServicesSetup', () => {
  let component: ServicesSetup;
  let fixture: ComponentFixture<ServicesSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServicesSetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServicesSetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
