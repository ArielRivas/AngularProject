import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharaComponent } from './chara.component';

describe('CharaComponent', () => {
  let component: CharaComponent;
  let fixture: ComponentFixture<CharaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
