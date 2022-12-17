import { Notification } from '@application/entities/notification';
import { NotificationsRepository } from '@application/repositories/notification-repository';

export class InMemoryNotificationsRepository
  implements NotificationsRepository
{
  public notifications: Notification[] = [];

  async findById(notificationId: string): Promise<Notification | null> {
    try {
      return (
        this.notifications.find((notification) => {
          return notification.id === notificationId;
        }) ?? null
      );
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  async create(notification: Notification) {
    this.notifications.push(notification);
  }

  async save(notification: Notification): Promise<void> {
    try {
      const notificationIndex = this.notifications.findIndex((n) => {
        return n.id === notification.id;
      });

      if (notificationIndex === -1) {
        this.notifications[notificationIndex] = notification;
      }
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
