window.onload = () => {
    new MainClass();

};
class MainClass {
    constructor() {
        this.iniciarElementos()

    }

    iniciarElementos() {
        this.btnCadastro = document.querySelector('#btnCadastro');
        console.log(this.btnLogin)
        this.btnCadastro.addEventListener('click', () => {
            this.tryCreate()
        })

    }
    tryCreate() {
        this.nome = document.querySelector('#nome').value
        this.email = document.querySelector('#email').value
        this.senha = document.querySelector('#senha').value
        console.log("nome:", this.nome , "email", this.email ,"senha", this.senha)
        if (this.email != "" && this.senha != "" && this.nome != "") {
            this.cadastrar(this.user, this.senha, this.nome)
        } else {
            console.log("Campos obrigatórios")
        }
    }
    cadastrar(email, senha, nome) {
        const dados = {
            'email': email,
            'senha': senha,
            'nome': nome
        }
        axios.post('/cadastrar', dados).then(response => {
            console.log(response)
        }).catch(err => {
            console.log("Erro ", err)
        })
    }

}