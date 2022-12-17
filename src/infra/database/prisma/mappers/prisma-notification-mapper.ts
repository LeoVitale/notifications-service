import { Content } from '@application/entities/content';
import { Notification } from '@application/entities/notification';
import { Notification as PrismaNotification } from '@prisma/client';

export class PrismaNotificationMapper {
  static toPersistence(notification: Notification) {
    return {
      id: notification.id,
      content: notification.content.value,
      category: notification.category,
      recipientId: notification.recipientId,
      readAt: notification.readAt,
      createdAt: notification.createdAt,
    };
  }

  static toDomain(prismaNotification: PrismaNotification): Notification {
    return new Notification(
      {
        content: new Content(prismaNotification.content),
        category: prismaNotification.category,
        recipientId: prismaNotification.recipientId,
        readAt: prismaNotification.readAt,
        createdAt: prismaNotification.createdAt,
        canceledAt: prismaNotification.canceledAt,
      },
      prismaNotification.id,
    );
  }
}
