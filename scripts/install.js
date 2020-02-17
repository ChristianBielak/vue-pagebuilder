const path = require('path');
const fs = require('fs-extra');

let vueProject = '../../../src/';
let laravelProject = '../../../resources/js';


if (fs.existsSync(vueProject)) {
  fs.copy('src', vueProject, function (err) {
    if (err) return console.error(err)
    console.log('success!')
  });
} else {
  if (!fs.existsSync('../../../resources/js/pagebuilder'))
    fs.copy('src', laravelProject, function (err) {
      if (err) return console.error(err)
      console.log('success!')
    });
}
