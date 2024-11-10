import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRecentPostComponent } from './most-recent-post.component';

describe('MostRecentPostComponent', () => {
  let component: MostRecentPostComponent;
  let fixture: ComponentFixture<MostRecentPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MostRecentPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MostRecentPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
