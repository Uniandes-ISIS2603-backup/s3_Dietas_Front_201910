import {DietaModule} from './dieta.module';

describe('DietaModule', () => {
    let dietaModule: DietaModule;

    beforeEach(() => {
        dietaModule = new DietaModule();
    });

    it('should create an instance', () => {
        expect(dietaModule).toBeTruthy();
    });
});