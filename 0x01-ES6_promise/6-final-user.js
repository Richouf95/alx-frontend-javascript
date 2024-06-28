import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

async function handleProfileSignup(firstName, lastName, fileName) {
  const signUpUserPromise = {
    status: 'pending ',
  };
  const uploadPhotoPromise = {
    status: 'pending ',
  };

  try {
    await signUpUser(firstName, lastName)
      .then((res) => {
        signUpUserPromise.status = 'fulfilled';
        signUpUserPromise.value = res;
      });
  } catch (err) {
    signUpUserPromise.status = 'rejected';
    signUpUserPromise.value = err.toString();
  }

  try {
    await uploadPhoto(fileName)
      .then((res) => {
        uploadPhotoPromise.status = 'fulfilled';
        uploadPhotoPromise.value = res;
      });
  } catch (err) {
    uploadPhotoPromise.status = 'rejected';
    uploadPhotoPromise.value = err.toString();
  }

  return [signUpUserPromise, uploadPhotoPromise];
}

export default handleProfileSignup;
