import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWebsiteBodyComponent } from './main-website-body.component';

describe('MainWebsiteBodyComponent', () => {
  let component: MainWebsiteBodyComponent;
  let fixture: ComponentFixture<MainWebsiteBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainWebsiteBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWebsiteBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
