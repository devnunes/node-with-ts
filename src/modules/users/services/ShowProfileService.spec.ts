import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';
import ShowProfileService from './ShowProfileService';

let fakeUserRepository: FakeUsersRepository;
let showProfile: ShowProfileService;

describe('UpdateUserAvatar', () => {
  beforeEach(() => {
    fakeUserRepository = new FakeUsersRepository();
    showProfile = new ShowProfileService(fakeUserRepository);
  });
  it('should be able to show the profile', async () => {
    const user = await fakeUserRepository.create({
      name: 'Jonh Doe',
      email: 'johndoe@exemple.com',
      password: '123123',
    });

    const profile = await showProfile.execute({
      user_id: user.id,
    });

    expect(profile.name).toBe('Jonh Doe');
    expect(profile.email).toBe('johndoe@exemple.com');
  });

  it('should not be able to show the profile of non-existing user', async () => {
    expect(
      showProfile.execute({
        user_id: 'non-existing-user-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
