export default function getResponseFromAPI() {
  const wraningAvoid = true;
  return new Promise((resolve, reject) => {
    if (wraningAvoid) resolve();
    reject();
  });
}
