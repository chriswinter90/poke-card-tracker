export function convertObjectToClasses(classObject) {
  return Object.keys(classObject).filter((key) => classObject[key]).join(' ');
}

export function toggleAllClasses(classObject) {
  return Object.keys(classObject).reduce((acc, key) => {
    return {
      ...acc,
      [key]: !classObject[key]
    }
  }, {})
}
