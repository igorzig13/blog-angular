import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTagComponent } from './content-tag.component';

describe('ContentTagComponent', () => {
  let component: ContentTagComponent;
  let fixture: ComponentFixture<ContentTagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentTagComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
