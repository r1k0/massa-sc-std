import {Address} from '../address';

describe('Doc tests', () => {
  it('should be simple to use', () => {
    const address = new Address('A00000', true);

    expect<u64>(address.isValid()).toBe(true);
  });
});
