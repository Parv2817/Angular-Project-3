import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcePatparvmComponent } from './ace-patparvm.component';

describe('AcePatparvmComponent', () => {
  let component: AcePatparvmComponent;
  let fixture: ComponentFixture<AcePatparvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AcePatparvmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AcePatparvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
