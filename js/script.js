// Objeto de Javascript
const pessoa = {
    nome: "Maria",
    idade: 52,
    profissao: "Desenvolvedora de Sistemas"
}

// Transdormando em JSON
const stringJSON = JSON.stringify(pessoa);
console.log(stringJSON);

// COnverter de volta para objeto
const pessoa2 = JSON.parse(stringJSON);
console.log(pessoa2);