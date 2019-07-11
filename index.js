const pug =require('pug');
console.log(pug.renderFile('./some.pug',{
    name: 'Timothi',
    age: 100
}))