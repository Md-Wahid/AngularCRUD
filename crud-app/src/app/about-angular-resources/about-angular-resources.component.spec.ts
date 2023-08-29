import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAngularResourcesComponent } from './about-angular-resources.component';

describe('AboutAngularResourcesComponent', () => {
  let component: AboutAngularResourcesComponent;
  let fixture: ComponentFixture<AboutAngularResourcesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AboutAngularResourcesComponent]
    });
    fixture = TestBed.createComponent(AboutAngularResourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
