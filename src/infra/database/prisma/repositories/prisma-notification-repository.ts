import { NotificationsRepository } from '@application/repositories/notification-repository';
import { Injectable } from '@nestjs/common';
import { Notification } from '@application/entities/notification';
import { PrismaService } from '../prisma.service';
import { PrismaNotificationMapper } from '../mappers/prisma-notification-mapper';

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository {
  constructor(private readonly prismaService: PrismaService) {}

  async findById(notificationId: string): Promise<Notification | null> {
    throw new Error('Method not implemented.');
  }

  async countManyByRecipientId(recipientId: string): Promise<number> {
    throw new Error('Method not implemented.');
  }

  async create(notification: Notification) {
    const raw = PrismaNotificationMapper.toPersistence(notification);
    await this.prismaService.notification.create({
      data: raw,
    });
  }

  async save(notification: Notification): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
