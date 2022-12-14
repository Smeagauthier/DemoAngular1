import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewComfactComponent } from './new-comfact.component';

describe('NewComfactComponent', () => {
  let component: NewComfactComponent;
  let fixture: ComponentFixture<NewComfactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewComfactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewComfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
