export default function createIteratorObject(report) {
  let iterableObject = [];

  if (!report.allEmployees || typeof(report.allEmployees) !== 'object') {
    return iterableObject;
  }

  iterableObject = {
    * [Symbol.iterator]() {
      for (const value of Object.values(report.allEmployees)) {
        for (const i of value) {
          yield i;
        }
      }
    },
  };

  return iterableObject;
}
