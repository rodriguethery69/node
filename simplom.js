const eleves = [
    {nom:"nabil", age:30},
    {nom:"rodrigue", age:31}
];

const cours = ['js','php','seo']

const telephone = {
    name:"samsung",
    prix: 123,
    a:() => {console.log(this)},
    b: function (){console.log(this)}
}

module.exports = {eleves, cours, telephone}
