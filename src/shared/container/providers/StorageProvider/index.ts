import { container } from 'tsyringe';

import IStorageProvider from './models/IStorageProvider';
import DiskStorageProvider from './implementations/DiskStorageProvider';

const providers = {
  diskStorageProvider: DiskStorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'DiskStorageProvider',
  providers.diskStorageProvider,
);
