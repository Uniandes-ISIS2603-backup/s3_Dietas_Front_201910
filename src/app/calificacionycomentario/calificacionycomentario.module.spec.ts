import { CalificacionycomentarioModule } from './calificacionycomentario.module';

describe('CalificacionycomentarioModule', () => {
  let calificacionycomentarioModule: CalificacionycomentarioModule;

  beforeEach(() => {
    calificacionycomentarioModule = new CalificacionycomentarioModule();
  });

  it('should create an instance', () => {
    expect(calificacionycomentarioModule).toBeTruthy();
  });
});
