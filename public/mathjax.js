window.MathJax = {
    loader: { load: ['[tex]/enclose'] },
    startup: {
      typeset:true
    },
    tex: {
      packages: { '[+]': ['enclose'] },
      macros: {        
        'parallelogram': '\\unicode{x25B1}',
        '(': '(',
        ')': ')',
        '[': '[',
        ']': ']',
        're': '\\re',
        'arccot': 'arccot',
        'arccsc': 'arccsc',
        'arcsec': 'arcsec',
        'blackdiamond': '\\blacklozenge',
        'blackheart': '\\unicode{x2665}',
        'blackrectangle': '\\unicode{x220e}',
        'blackstar': '\\unicode{x2605}',
        'heart': '\\heartsuit',
        'female': '\\unicode{x2640}',
        'male': '\\unicode{x2642}',
        'napprox': '\\unicode{x2249}',
        'nequiv': '\\unicode{x2262}',
        'notni': '\\unicode{x220c}',
        'nsubset': '\\unicode{x2284}',
        // "nsupset": 'TODO',
        'oiiint': '\\unicode{x2230}',
        'oiint': '\\unicode{x222f}',
        // "parallelequal":"TODO",
        'rectangle': '\\unicode{x25ad}',
        'smiley': '\\unicode{x263a}',
        'wideparen': '\\overparen',
        'textcircled': '\\enclose{circle}',
        'textperthousand': '\\unicode{x2030}',
        'textregistered': '\\unicode{xae}',
        'textsection': '\\unicode{xa7}',
        'texttrademark': '\\unicode{x2122}',
        'textreferencemark': '\\unicode{x203b}',
        'tab': '\\text{ }\\text{ }\\text{ }\\text{ }'
      }
    }
  };