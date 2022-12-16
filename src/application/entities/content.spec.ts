import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a new notification content', () => {
    const content = new Content('Você recebeu uma solicitação de amizade');
    expect(content).toBeTruthy();
  });

  it('should not be able to create a new notification content with less then 5 characters', () => {
    expect(() => new Content('Você')).toThrow();
  });

  it('should not be able to create a new notification content with more then 5 characters', () => {
    expect(() => new Content('Você'.repeat(241))).toThrow();
  });
});
