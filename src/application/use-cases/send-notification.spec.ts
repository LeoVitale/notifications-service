import { SendNotification } from './send-notification';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const sendNotification = new SendNotification();
    const request = {
      recipientId: '1',
      category: 'category',
      content: 'content',
    };
    const response = await sendNotification.execute(request);
    expect(response.notification).toBeTruthy();
  });
});
