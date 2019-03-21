import { getToggles } from './toggles';
import { fail } from 'assert';

it('gets toggle state correctly', async () => {

    setTimeout(() => {
        fail('timeout');
    }, 1000);

    const toggleState = await getToggles();
    expect(toggleState.greeting).toEqual(true);
});