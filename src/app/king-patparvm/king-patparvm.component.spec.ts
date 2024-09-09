import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KingPatparvmComponent } from './king-patparvm.component';

describe('KingPatparvmComponent', () => {
  let component: KingPatparvmComponent;
  let fixture: ComponentFixture<KingPatparvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KingPatparvmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KingPatparvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
