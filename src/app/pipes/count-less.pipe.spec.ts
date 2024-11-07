import { CountLessPipe } from './count-less.pipe';

describe('CountLessPipe', () => {
  it('create an instance', () => {
    const pipe = new CountLessPipe();
    expect(pipe).toBeTruthy();
  });
});
