import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./mocks/server.ts";
// import { App } from './App.tsx'
import { Parte1 } from "./parte1.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App /> */}
    <Parte1 />
  </StrictMode>, //esse strict mode ajuda a encontrar erros no codigo
);

//use state é um hook do react que permite adicionar estado a componentes funcionais. Ele retorna um array com dois elementos: o valor atual do estado e uma função para atualizá-lo.
//use effect é outro hook do react que permite executar efeitos colaterais em componentes funcionais, como buscar dados, configurar assinaturas ou modificar o DOM. Ele aceita uma função que é executada após a renderização do componente e um array de dependências que determina quando o efeito deve ser reexecutado.
//use callback é um hook do react que retorna uma versão memoizada de uma função de callback. Ele é útil para evitar recriações desnecessárias de funções em componentes filhos que dependem dessas funções como props.
//use memo é um hook do react que retorna um valor memoizado. Ele é útil para evitar cálculos caros em cada renderização, armazenando o resultado de uma função e retornando-o novamente se as dependências não mudaram.
// use effect é um hook do React que permite executar efeitos colaterais em componentes funcionais, como buscar dados, configurar assinaturas ou modificar o DOM. Ele aceita uma função que é executada após a renderização do componente e um array de dependências que determina quando o efeito deve ser reexecutado.
//use reducer é um hook do React que é usado para gerenciar o estado complexo em componentes funcionais. Ele é uma alternativa ao useState e é inspirado no padrão de design Redux. O useReducer aceita um reductor (uma função que determina como o estado deve ser atualizado com base em uma ação) e um estado inicial, retornando o estado atual e uma função dispatch para enviar ações ao reductor.
//
