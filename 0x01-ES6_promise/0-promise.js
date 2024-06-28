function getResponseFromAPI() {
  const promiseResolved = true;

  return new Promise((resolve, reject) => {
    if (promiseResolved) resolve();

    else reject();
  });
}

export default getResponseFromAPI;
