import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConditionalContentComponent } from './conditional-content.component';

describe('ConditionalContentComponent', () => {
  let component: ConditionalContentComponent;
  let fixture: ComponentFixture<ConditionalContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConditionalContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConditionalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
