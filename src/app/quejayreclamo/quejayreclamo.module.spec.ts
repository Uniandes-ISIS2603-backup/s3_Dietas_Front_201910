import { QuejayreclamoModule } from './quejayreclamo.module';

describe('QuejayreclamoModule', () => {
  let quejayreclamoModule: QuejayreclamoModule;

  beforeEach(() => {
    quejayreclamoModule = new QuejayreclamoModule();
  });

  it('should create an instance', () => {
    expect(quejayreclamoModule).toBeTruthy();
  });
});
