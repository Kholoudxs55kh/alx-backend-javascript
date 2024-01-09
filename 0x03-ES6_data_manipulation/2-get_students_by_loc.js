export default function getStudentsByLocation(arr, city) {
  if (Array.isArray(arr)) {
    return arr.filter((ele) => (ele.location === city));
  }

  return [];
}
