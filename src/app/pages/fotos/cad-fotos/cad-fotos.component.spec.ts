import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadFotosComponent } from './cad-fotos.component';

describe('CadFotosComponent', () => {
  let component: CadFotosComponent;
  let fixture: ComponentFixture<CadFotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadFotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadFotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
