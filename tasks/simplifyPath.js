function simplifyPath(path) {

  var parts = path.split('/'),
      simplified = [],
      length = 0;
  for (var i = 0; i < parts.length; i++) {
    var part = parts[i];
    if (part === '.' || part === '' || part === '..') {
      if (part === '..' && length > 0) {
        length--;
      }
      continue;
    }
    simplified[length++] = part;
  }

  if (length === 0) {
    return '/';
  }

  var result = '';
  for (var i = 0; i < length; i++) {
    result +=  '/'+simplified[i] ;
  }

  return result;
}
