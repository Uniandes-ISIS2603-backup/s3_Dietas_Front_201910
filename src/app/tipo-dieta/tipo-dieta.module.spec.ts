import { TipoDietaModule } from './tipo-dieta.module';

describe('TipoDietaModule', () => {
  let tipoDietaModule: TipoDietaModule;

  beforeEach(() => {
    tipoDietaModule = new TipoDietaModule();
  });

  it('should create an instance', () => {
    expect(tipoDietaModule).toBeTruthy();
  });
});
