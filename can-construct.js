function canConstruct(target, strs) {
  if (target === "") return true;
  for (let str of strs) {
    let subtracted = target;
    if (isPrefix(target, str)) {
      subtracted = target.slice(str.length);
    } else if (isSuffix(target, str)) {
      subtracted = target.slice(0, target.indexOf(str) + 1);
    } else {
      continue;
    }
    if (canConstruct(subtracted, strs)) {
      return true;
    }
  }
  return false;
}

function isPrefix(host, test) {
  if (host.indexOf(test) === 0) return true;
  return false;
}

function isSuffix(host, test) {
  const pos = host.indexOf(test);
  if (pos + test.length === host.length) {
    return true;
  }
  return false;
}

console.log(canConstruct("catdogmice", ["ca", "td"]));
