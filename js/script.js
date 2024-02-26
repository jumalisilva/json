// Objeto de Javascript
const pessoa = {
    nome: "Maria",
    idade: 52,
    profissao: "Desenvolvedora de Sistemas"
}

// Transdormando em JSON
const stringJSON = JSON.stringify(pessoa);
console.log(stringJSON);

// Converter de volta para objeto
const pessoa2 = JSON.parse(stringJSON);
console.log(pessoa2);

// JSON
const meuJSON = 
'{"nome": "Junior", "idade": 21, "skills":["HTML", "CSS", "JavaScript"]}';

console.log(meuJSON);
console.log(typeof meuJSON);

// JSON da string e transforma objeto para JSON
const meuObjeto = JSON.parse(meuJSON);
console.log(meuObjeto);

console.log(meuObjeto.nome);
console.log(typeof meuObjeto);

// JSON inválido
const invalidoJSON = '{"nome": Junior, "idade": 21}';

const novoInvalidoJSON = JSON.parse(invalidoJSON);
console.log(novoInvalidoJSON);