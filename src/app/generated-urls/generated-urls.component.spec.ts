import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedURLSComponent } from './generated-urls.component';

describe('GeneratedURLSComponent', () => {
  let component: GeneratedURLSComponent;
  let fixture: ComponentFixture<GeneratedURLSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratedURLSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratedURLSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
