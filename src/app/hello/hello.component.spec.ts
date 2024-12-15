import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloComponent } from './hello.component';

describe('HelloComponent', () => {
  let component: HelloComponent;
  let fixture: ComponentFixture<HelloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelloComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render hello world paragraph', () => {
    const expectedText = 'hello world!';

    const elementP = fixture.nativeElement.querySelector('p');

    expect(elementP.textContent).toBe(expectedText);
  });
  it('should render paragraph with passed value', () => {
    const expectedText = 'hello!';

    component.text = expectedText;
    fixture.detectChanges();

    const elementP = fixture.nativeElement.querySelector('p');

    expect(elementP.textContent).toBe(expectedText);
  });
});
