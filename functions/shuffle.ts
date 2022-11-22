export function shuffle(elements: any[]): any[] {
  return elements
    .map((value) => ({ value, randomValue: Math.random() }))
    .sort((obj1, obj2) => obj1.randomValue - obj2.randomValue)
    .map((newObj) => newObj.value);
}
