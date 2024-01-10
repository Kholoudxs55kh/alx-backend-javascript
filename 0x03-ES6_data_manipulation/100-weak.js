export const weakMap = new WeakMap();
let count = 1;

export function queryAPI(obj) {
  weakMap.set(obj, count);
  count += 1;
  const queryNum = weakMap.get(obj);
  if (queryNum >= 5) {
    throw new Error('Endpoint load is high');
  }
}
