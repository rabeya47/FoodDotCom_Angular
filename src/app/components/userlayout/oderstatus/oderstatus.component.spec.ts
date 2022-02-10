import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OderstatusComponent } from './oderstatus.component';

describe('OderstatusComponent', () => {
  let component: OderstatusComponent;
  let fixture: ComponentFixture<OderstatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OderstatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OderstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
