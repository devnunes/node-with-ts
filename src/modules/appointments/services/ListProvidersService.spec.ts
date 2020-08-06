import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import ListProvidersService from './ListProvidersService';

let fakeUserRepository: FakeUsersRepository;
let listProviders: ListProvidersService;

describe('ListProviders', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    listProviders = new ListProvidersService(fakeUserRepository);
  });

  it('should be able to list providers', async () => {
    const user1 = await fakeUserRepository.create({
      name: 'Jonh Doe',
      email: 'johndoe@exemple.com',
      password: '123123',
    });

    const user2 = await fakeUserRepository.create({
      name: 'Jonh Trê',
      email: 'johntre@exemple.com',
      password: '123123',
    });

    const loggedUser = await fakeUserRepository.create({
      name: 'Jonh Qua',
      email: 'johnqua@exemple.com',
      password: '123123',
    });

    const providers = await listProviders.execute({
      user_id: loggedUser.id,
    });

    expect(providers).toEqual([user1, user2]);
  });
});
