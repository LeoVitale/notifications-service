import { Content } from '@application/entities/content';
import {
  Notification,
  NotificationProps,
} from '@application/entities/notification';

type Override = Partial<NotificationProps>;

export function makeNotification(override: Override = {}) {
  return new Notification({
    recipientId: '1',
    category: 'social',
    content: new Content('Nova solicitação de amizade!'),
    ...override,
  });
}
