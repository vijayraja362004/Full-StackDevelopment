import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngulaComponent } from './angula.component';

describe('AngulaComponent', () => {
  let component: AngulaComponent;
  let fixture: ComponentFixture<AngulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AngulaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
