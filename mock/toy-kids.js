function getLastKid(numberKids, numberToys, start) {
  if (start > numberToys) start = start - numberToys;
  if (numberToys < numberKids) return start + numberToys - 1;
  return getLastKid(numberKids, numberToys - 1, start + 1);
}
function getLastKid2(numberKids, numberToys, start) {
  if (numberToys < numberKids) return start + numberToys - 1;
  return numberToys % numberKids === 0 ? numberKids : numberToys % numberKids;
}

console.log(getLastKid(3, 21, 1));
console.log(getLastKid2(3, 21, 1));
