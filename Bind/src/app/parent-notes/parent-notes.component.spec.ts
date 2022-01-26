import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentNotesComponent } from './parent-notes.component';

describe('ParentNotesComponent', () => {
  let component: ParentNotesComponent;
  let fixture: ComponentFixture<ParentNotesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentNotesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
