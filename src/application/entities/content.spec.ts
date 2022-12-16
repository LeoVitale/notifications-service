import { Content } from './content';

test('it should be able to create a new notification content', async () => {
  const content = new Content('Você recebeu uma solicitação de amizade');
  expect(content.value).toBeTruthy();
});
