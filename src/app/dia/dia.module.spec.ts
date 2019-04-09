import { DiaModule } from './dia.module';

describe('DiaModule', () => {
  let diaModule: DiaModule;

  beforeEach(() => {
    diaModule = new DiaModule();
  });

  it('should create an instance', () => {
    expect(diaModule).toBeTruthy();
  });
});
