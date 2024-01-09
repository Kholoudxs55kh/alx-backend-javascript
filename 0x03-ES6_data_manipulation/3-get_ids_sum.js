export default function getStudentIdsSum(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((prev, curr) => prev + curr.id, 0);
  }

  return [];
}
