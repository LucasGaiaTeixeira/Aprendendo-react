import axios from "axios";

const axiosinstance = axios.create();

export const toDoApi = {
  async getAll() {
    const response = await axiosinstance.get("/api/todos");
    console.log(response.data.json());
  },
};

//essa pasta service serve para fazer a comunicação com a api externa, onde ficam as funções que fazem as requisições para o backend, e retornam os dados para o frontend. Assim, se precisar mudar a api, ou a forma de comunicação, só precisa mudar aqui, sem precisar mexer no restante do código.

//instalei o axios tambem e ele serve para fazer requisições http, ele é uma biblioteca que facilita a comunicação com a api, ele é baseado em promisses e tem uma sintaxe mais simples que o fetch nativo do javascript.
