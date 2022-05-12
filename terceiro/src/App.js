import {useState} from "react";
function App() {

const [produto, setProduto] = useState(
  [
    {
    id:500,
    nome:"Mouse",
    categoria:"informatica",
    preco:50.50
    },
    {
    id:501,
    nome:"Teclado",
    categoria:"informatica",
    preco:150.90
    }
  ]
);
return (
<div>
  <button onClick={()=> {
    let id = prompt("Entre com id do produto");
    let nome = prompt("Entre com nome do produto");
    let categoria = prompt("Entre com categoria do produto");
    let preco = prompt("Entre com o preço do produto");
    
    setProduto(
      produto.concat({
      id: id,
      nome: nome,
      categoria: categoria,
      preco: preco,
    }),
  )
}}>
  Adicionar produto
 </button>
  
  <h2>Produtos Cadastrados</h2>

    {produto.map((item,index) => (
      <div key={index}>
      <h3>{item.nome}</h3>
      <ul>
        <li>Código do Produto: {item.id}</li>
        <li>Categoria do Produto: {item.categoria}</li>
        <li>Preço do Produto: R$ {item.preco}</li>
      </ul>
      </div>
    ))}

    </div>
  );
}

export default App;
