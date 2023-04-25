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

    ...(process.env.NODE_ENV !== 'development'
      ? [
          MongooseModule.forRootAsync({
            imports: [ConfigModule],
            inject: [ConfigService],
            useFactory: async (config: ConfigService) => ({
              uri: config.get<string>('MONGODB_URI', 'mongodb://localhost:27017/test'),
            }),
          }),
        ]
      : []),

    CacheModule.registerAsync<RedisClientOptions>({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const options = {
          store: redisStore as unknown as CacheStore,
          url: config.get<string>('REDIS_URL', 'redis://localhost:6379'),
          ttl: config.get<number>('CACHE_TTL', 180), // 3 * 60 = 3 minutes
        };
        // set a different TTL for development environment
        if (config.get<string>('NODE_ENV') === 'development') {
          options.ttl = 1800; // 30 minutes
        }
        return options;
      },
      isGlobal: true,
    }),

    DeveloperModule,
  ],

  providers: [
    {
      provide: APP_INTERCEPTOR,
      useFactory: () => {
        if (process.env.NODE_ENV === 'development') {
          return null;
        }
        return CacheInterceptor;
      },
    },
  ],
})
export class AppModule {}
