import { NotificationsRepository } from '@application/repositories/notification-repository';
import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(notificationId: string): Promise<Notification | null> {
    try {
      const notification = await this.prismaService.notification.findUnique({
        where: { id: notificationId },
      });
      if (!notification) {
        return null;
      }
      return PrismaNotificationMapper.toDomain(notification);
    } catch (error) {
      return null;
    }
  }

  async findManyByRecipientId(recipientId: string): Promise<Notification[]> {
    try {
      const notifications = await this.prismaService.notification.findMany({
        where: { recipientId },
      });
      return notifications.map(PrismaNotificationMapper.toDomain);
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    try {
      const count = await this.prismaService.notification.count({
        where: { recipientId },
      });
      return count;
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  async create(notification: Notification) {
    try {
      const raw = PrismaNotificationMapper.toPersistence(notification);
      await this.prismaService.notification.create({
        data: raw,
      });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }

  async save(notification: Notification): Promise<void> {
    try {
      const raw = PrismaNotificationMapper.toPersistence(notification);
      await this.prismaService.notification.update({
        where: { id: notification.id },
        data: raw,
      });
    } catch (error) {
      throw new Error('Method not implemented.');
    }
  }
}
