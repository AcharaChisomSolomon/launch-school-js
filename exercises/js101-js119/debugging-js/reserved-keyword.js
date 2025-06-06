const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
    'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
    'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
    'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
    'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
    'with', 'yield'];
  
  function isReserved(name) {
    return RESERVED_KEYWORDS.includes(name)
  }
  
  console.log(isReserved('monkey')); // false
  console.log(isReserved('patch'));  // false
  console.log(isReserved('switch')); // should be: true