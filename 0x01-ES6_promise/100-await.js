import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  let photo;
  let user;

  try {
    photo = await uploadPhoto();
    user = await createUser();
  } catch (err) {
    photo = user = null;
  }

  const userData = {
    photo,
    user,
  };

  return userData;
}

export default asyncUploadUser;
