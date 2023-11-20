import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPublicacaoComponent } from './list-publicacao.component';

describe('ListPublicacaoComponent', () => {
  let component: ListPublicacaoComponent;
  let fixture: ComponentFixture<ListPublicacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPublicacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPublicacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
