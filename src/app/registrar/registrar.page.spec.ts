import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistrarPage } from './registrar.page';
import { UserService } from 'src/services/user.service'; // Importa tu servicio
import { Auth } from '@angular/fire/auth';

describe('RegistrarPage', () => {
  let component: RegistrarPage;
  let fixture: ComponentFixture<RegistrarPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegistrarPage],
      providers: [UserService, Auth]  // Proporciona los servicios requeridos
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

