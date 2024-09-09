import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JackPatparvmComponent } from './jack-patparvm.component';

describe('JackPatparvmComponent', () => {
  let component: JackPatparvmComponent;
  let fixture: ComponentFixture<JackPatparvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JackPatparvmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JackPatparvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
