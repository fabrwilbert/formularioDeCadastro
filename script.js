
//Preenchimento automático do endereço ao digitar o CEP
document.getElementById("cep").addEventListener("blur", (evento) => {//quando o campo cep perde o foco
    const elemento = evento.target;//pega o campo
    const cepInformado = elemento.value;//le o valor digitado

    if (! (cepInformado.length === 8)){//se o cep informado for menor que 8 digitos
        return // retorna 
    }

    fetch(`https://viacep.com.br/ws/${cepInformado}/json/`)
        .then(response => response.json())
        .then(data =>{
            if(!data.erro){
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            }else{
                alert("CEP não encontrado.")
            }
        })
        .catch(error => console.error("Erro ao buscar o CEP", error))
})

//Previnindo o envio sem os dados completos
const formularioCadastrar = document.getElementById("dadosPessoais");

formularioCadastrar.addEventListener("submit", function(event){
    event.preventDefault();
    //alert("Dados cadastrados com sucesso.");
    //localStorage.clear();
    //location.reload();
})

//Salvar os dados preenchidos no web storage api para evitar que o suário percas as informações ao recarregar a pagina

//Enviando os dados
const botaoCadastrar = document.getElementById("cadastrar");


botaoCadastrar.addEventListener("click", ()=> {
    
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const dataNascimento = document.getElementById("dataNascimento").value;

    const cepInformado = document.getElementById("cep").value;
    const numero = document.getElementById("numero").value;

    const antepenultima = document.getElementById("antepenultima").value;
    const penultima = document.getElementById("penultima").value;
    const ultima = document.getElementById("ultima").value;

    const cursos = document.getElementById("cursos").value;
    const skills = document.getElementById("skills").value;
    const outros = document.getElementById("outros").value;

    if (! (cepInformado.length === 8)){
        alert("Digite um CEP valido")
        return
    }

    if(nome.length < 2 || (! isNaN(nome))){
        alert("Insira um nome valido.")
        return
    }

    //verificar se o usuário tem um cep pré definido
    const cepAtual = localStorage.getItem("cep");
    //verifcar o cep informado é igual o cep atual se não, troca.
    const novoCep = cepInformado === cepAtual ? cepAtual : cepInformado

    //salvar o cep no localStorage

    localStorage.setItem("nome", nome);
    localStorage.setItem("sobrenome", sobrenome);
    localStorage.setItem("dataNascimento", dataNascimento);

    localStorage.setItem("cep", novoCep);
    localStorage.setItem("numero", numero);

    localStorage.setItem("antepenultima", antepenultima);
    localStorage.setItem("penultima", penultima);
    localStorage.setItem("ultima", ultima);

    localStorage.setItem("cursos", cursos);
    localStorage.setItem("skills", skills);
    localStorage.setItem("outros", outros);
})

const nome = document.getElementById("nome");
const sobrenome = document.getElementById("sobrenome");
const dataNascimento = document.getElementById("dataNascimento");

const cep = document.getElementById("cep");
const numero = document.getElementById("numero");

const antepenultima = document.getElementById("antepenultima");
const penultima = document.getElementById("penultima");
const ultima = document.getElementById("ultima");

const cursos = document.getElementById("cursos");
const skills = document.getElementById("skills");
const outros = document.getElementById("outros");

//Restaurar os dados do formulário ao carregar a página
document.addEventListener('DOMContentLoaded', ()=>{
    //verificar se há dados salvos
    const nomeSalvo = localStorage.getItem("nome");
    const sobrenomeSalvo = localStorage.getItem("sobrenome");
    const dataNascimentoSalvo = localStorage.getItem("dataNascimento");

    const cepSalvo = localStorage.getItem("cep");
    const numeroSalvo = localStorage.getItem("numero");

    const antenultimaSalvo = localStorage.getItem("antepenultima");
    const penultimaSalvo = localStorage.getItem("penultima");
    const ultimaSalvo = localStorage.getItem("ultima");

    const cursosSalvo = localStorage.getItem("cursos");
    const skillsSalvo = localStorage.getItem("skills");
    const outrosSalvo = localStorage.getItem("outros");

    //carregar o cep anterior

    nome.value = nomeSalvo;
    sobrenome.value = sobrenomeSalvo;
    dataNascimento.value = dataNascimentoSalvo;

    cep.value = cepSalvo;
    numero.value = numeroSalvo;

    antepenultima.value = antenultimaSalvo;
    penultima.value = penultimaSalvo;
    ultima.value = ultimaSalvo;

    cursos.value = cursosSalvo;
    skills.value = skillsSalvo;
    outros.value = outrosSalvo;
})

const cepSalvo = localStorage.getItem("cep");
if (cepSalvo && cepSalvo.length === 8){

    fetch(`https://viacep.com.br/ws/${cepSalvo}/json/`)
        .then(response => response.json())
        .then(data =>{
            if(!data.erro){
                document.getElementById('logradouro').value = data.logradouro;
                document.getElementById('bairro').value = data.bairro;
                document.getElementById('cidade').value = data.localidade;
                document.getElementById('estado').value = data.uf;
            }else{
                alert("CEP não encontrado.")
            }
        })
        .catch(error => console.error("Erro ao buscar o CEP", error))
}