import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadPublicacaoComponent } from './cad-publicacao.component';

describe('CadPostComponent', () => {
  let component: CadPublicacaoComponent;
  let fixture: ComponentFixture<CadPublicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadPublicacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CadPublicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
