import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthorAndDateComponent } from './author-and-date.component';

describe('AuthorAndDateComponent', () => {
  let component: AuthorAndDateComponent;
  let fixture: ComponentFixture<AuthorAndDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthorAndDateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthorAndDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
