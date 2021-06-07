var main = document.getElementById("principal")


function aluno(nome, idade, qtdeFilhos) {
    this.nome = nome;
    this.idade = idade;

    this.filhos = function () {

        var f1 = false;
        var f2 = null;
        var f3 = undefined;

        // if (qtdeFilhos) {
        //     return 'O aluno ' + nome + ' tem ' + qtdeFilhos + ' filhos'
        // } else {
        //     return 'O aluno ' + nome + ' não tem filhos'
        // }

        if (!qtdeFilhos) {
            return 'O aluno ' + nome + ' não tem filhos'
        }
    }
}

var alunos = [
    new aluno("Beatriz", 20, 2),
    new aluno("Patricia", 18, null),
]

for (var aluno of alunos) {
    var div1 = document.createElement('div');
    var spanNome = document.createElement('span');


    var spanFilhos = document.createElement('span');
    spanFilhos.innerText = aluno.filhos()

    spanNome.innerText = aluno.nome


    // div1.appendChild(spanNome)
    div1.appendChild(spanFilhos)

    main.appendChild(div1)
}

console.log(main)
