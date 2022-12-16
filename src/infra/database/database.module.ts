import { Module } from '@nestjs/common';
import { NotificationsRepository } from '@application/repositories/notification-repository';
import { PrismaNotificationRepository } from './prisma/repositories/prisma-notification-repository';
import { PrismaService } from './prisma/prisma.service';

@Module({
  providers: [
    PrismaService,
    {
      provide: NotificationsRepository,
      useClass: PrismaNotificationRepository,
    },
  ],
  exports: [NotificationsRepository],
})
export class DataBaseModule {}
