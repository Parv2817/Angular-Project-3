import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueenPatparvmComponent } from './queen-patparvm.component';

describe('QueenPatparvmComponent', () => {
  let component: QueenPatparvmComponent;
  let fixture: ComponentFixture<QueenPatparvmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QueenPatparvmComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QueenPatparvmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
