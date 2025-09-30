import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSetup } from './template-setup';

describe('TemplateSetup', () => {
  let component: TemplateSetup;
  let fixture: ComponentFixture<TemplateSetup>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateSetup]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateSetup);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
