import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';
  config: {
    redis: RedisOptions;
  };
}

export default {
  driver: 'redis',
  config: {
    redis: {
      host: 'localhost', // Redis host
      port: 6379, // Redis port
      password: undefined,
    },
  },
} as ICacheConfig;
