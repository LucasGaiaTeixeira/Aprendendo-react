import { useState } from "react";

export function Parte1(){
    const [inputOl, setInputOl] = useState("");
    const [inputUl, setInputUl] = useState("");

    const [ol, setOl] = useState([
        {id: "1", label: "primeiro"},
        {id: "2", label: "segundo"},
        {id: "3", label: "terceiro"}
    ]);
    const [ul, setUl] = useState([
        {id: "1", label: "item A"},
        {id: "2", label: "item B"},
        {id: "3", label: "item C"}
    ]);

    return(
        <>
            <input value = {inputOl}  onChange={(event) => {setInputOl(event.target.value)}}/> {/*quando digita algo no input o html interpreta isso como um evento e quem reconhece isso e o onChange, armazena isso no parametro event, mas pode ser qualquer outro nome, e pode se usar as propriedades desse objeto event e chamando o event.target.value pode se pegar o valor do input*/}
            
            <button onClick={() => {
                setOl([...ol, {id: (ol.length + 1).toString(), label: inputOl}]);
                setInputOl("");
            }}
            >Adicionar Item OL</button> {/*ol faz uma lista ordenada de numros, primeiro segundo terceiro e etc*/}
                                        {/* <li>primeiro</li>li é cada item da lista */}
            <ol>                        
                {ol.map((item) => {
                    return (
                    <li key={item.id}>{item.label}        {/*aqui estou usando o id como key e o label como conteúdo do item*/}
                    <button onClick={() => {
                        setOl([...ol.filter((origin) => { return item.id !== origin.id})]);
                    }}
                    >Remover</button>
                    </li>
                )})}
            

            </ol>    
            
            <input value={inputUl} onChange={(event) => {setInputUl(event.target.value)}}/>
            
            <button onClick={() => {
                setUl([...ul, {id: (ul.length + 1).toString(), label: inputUl}]);
                setInputUl("");
            }}>Adicionar Item UL</button>
            
            <ul> {/*ul faz uma lista desordenada, com marcadores*/}
                {ul.map((item) => {
                    return <li key={item.id}>{item.label}</li>
                })}
            </ul>

            {console.log(ol, ul)}
        </>
    )
}


//obs: quando trabalhar com listas em react, sempre usar a propriedade key em cada item da lista, para ajudar o react a identificar cada item e otimizar a renderização. A key deve ser única entre os irmãos, ou seja, não pode ter dois itens com a mesma key na mesma lista. Pode usar o index do map como key, mas é melhor usar um identificador único se possível, para evitar problemas quando a lista mudar de ordem ou tiver itens removidos ou adicionados.
//obs2: usando como objeto id e label para cada item da lista, assim pode usar o id como key e o label como conteúdo do item. Exemplo: {ol.map((item) => <li key={item.id}>{item.label}</li>)}.
//obs3: o map é um método de array que cria um novo array com os resultados da chamada de uma função para cada elemento do array original. No exemplo acima, o map é usado para transformar cada item do array ol em um elemento li, que é renderizado dentro do elemento ol.