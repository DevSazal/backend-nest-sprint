import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { CacheInterceptor, CacheModule, CacheStore } from '@nestjs/cache-manager';
import { DeveloperModule } from './developer/developer.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { MongooseModule } from '@nestjs/mongoose';
import { redisStore } from 'cache-manager-redis-store';
import type { RedisClientOptions } from 'redis';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),

    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('MONGODB_URI'),
      }),
    }),

    CacheModule.registerAsync<RedisClientOptions>({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        store: redisStore as unknown as CacheStore,
        url: config.get<string>('REDIS_URL', 'redis://localhost:6379'),

        onClientReady: (client) => {
          client.on('error', (err) => {});
        },
      }),
      isGlobal: true,
    }),

    DeveloperModule,
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
})
export class AppModule {}
