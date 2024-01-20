class Veiculo {
  marca;
  modelo;
  cor;
  ano;
  tamanho;
  peso;

  alterar_peso(peso) {
    this.peso = peso;
  }
}
// herança = Carro (filho) herda de Veiculo (pai)
class Carro extends Veiculo {
  volume_porta_malas;
}

// herança = Caminhão (filho) herda de Veiculo (pai)
class Caminhao extends Veiculo {
  quilometragem_tacografo;
  capacidade_kg;

  zerar_tacografo(){
    this.quilometragem_tacografo = 0;
  }
}

module.exports = { Veiculo, Carro, Caminhao }


