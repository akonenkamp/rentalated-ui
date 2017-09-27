import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AparmentDetailComponent } from './aparment-detail.component';

describe('AparmentDetailComponent', () => {
  let component: AparmentDetailComponent;
  let fixture: ComponentFixture<AparmentDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AparmentDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AparmentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
