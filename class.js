class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    attack(){
        let ataque = ""
        if(this.tipo === "Ninja"){
            ataque = "Shuriken"
        }
        else if(this.tipo === "Mago"){
            ataque = "Magia"
        }
        else if(this.tipo === "Guerreiro"){
            ataque = "Espada"
        }
        else{
            ataque = "Artes Marciais"
        }

        console.log(`O ${this.tipo} atacou usando ${ataque}`)
    }
}
let heroi1 = new heroi ("Herói 1", 20, "Ninja")
let heroi2 = new heroi ("Herói 2", 25, "Mago")
let heroi3 = new heroi ("Herói 3", 22, "Monge")
let heroi4 = new heroi ("Herói 4", 21, "Guerreiro")

heroi1.attack();
heroi2.attack();
heroi3.attack();
heroi4.attack();