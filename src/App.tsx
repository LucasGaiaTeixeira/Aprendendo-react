import { useState } from "react";


export function App() {
    const [hide, setHide] = useState(false);
 return(
  <>
  Bucha de canhão
  {!hide && <p>teste</p>}{/* isso faz com oque retire do html a redenzaçao desse paragrafo, ou pode ser componente tbm para o navegador não precisar carregar e rendenizar o componente ou oque for e não pesar na pagina ter que carregar muita coisa que não esta sendo vista*/}
  {hide ? <p>Escondido</p> : <p>Mostrado</p>}{/*isso é um if ternario, se hide for true mostra escondido, se for false mostra mostrado, verifica se hide e true ou false, se for true vai apos o (?) se for false vai apos o (:)*/}
  <Card title="tanto fez" content="content" footer="footer">
    teste1
  </Card>
  <Card title="não sei">
    teste2
    
  </Card>
  <ButtonSum />
  <button onClick={() => {setHide(!hide)}}>Esconda Texto</button>
  </>


 );
}


interface ICardPorps {
    title: string;
    content?: string;
    footer?: string;
    children: React.ReactNode;//quer fizer que o componente possa receber outros componentes como filhos, como no exemplo acima com o Card. não vai ser mais <Card /> e sim <Card> TESTE </Card>
    //obs: tem que ser children mesmo, pq é uma palavra reservada do react para esse tipo de situação.
    //obs2: React.ReactNode é um tipo que representa qualquer coisa que possa ser renderizada pelo React, como elementos JSX, strings, números, arrays ou fragmentos.
}

const Card = (props: ICardPorps) => {//ou pode ser tbm ({children} : IcardProps) para pegar só o children ou outros parâmetros específicos de IcardProps se quiser um so deles se quiser usar todos esta no codigo sem comentario
    return(
        <div style={{border: "1px solid black", padding: "10px", margin: "10px"}}>
            <span>Title {props.title}</span>
            <p>Content {props.content}</p>
            <footer>final {props.footer}</footer>
            <div>{props.children}</div>
        </div>
    )
}


const ButtonSum = () => {
    const [count, setCount] = useState(0);
    
    return(
        <button onClick={() =>setCount(count + 1)}>
            Click Aqui {count}
        </button>
        
    )
}


//obs: não pode colocar hooks (useState, useEffect, etc) fora de componentes funcionais ou outros hooks após um if, loop ou função, tem que ser sempre no topo do componente funcional ou de outro hook.




