import { container } from 'tsyringe';

import IHashProvider from '@modules/users/providers/HashProvider/model/IHashProvider';
import HashProvider from '@modules/users/providers/HashProvider/implementations/BCryptHashProvider';

container.registerSingleton<IHashProvider>('HashProvider', HashProvider);