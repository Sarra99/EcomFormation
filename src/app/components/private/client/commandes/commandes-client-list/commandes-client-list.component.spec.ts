import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesClientListComponent } from './commandes-client-list.component';

describe('CommandesClientListComponent', () => {
  let component: CommandesClientListComponent;
  let fixture: ComponentFixture<CommandesClientListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommandesClientListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandesClientListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
