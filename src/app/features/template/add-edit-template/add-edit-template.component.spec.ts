import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTemplateComponent } from './add-edit-template.component';

describe('AddEditTemplateComponent', () => {
  let component: AddEditTemplateComponent;
  let fixture: ComponentFixture<AddEditTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddEditTemplateComponent]
    });
    fixture = TestBed.createComponent(AddEditTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
