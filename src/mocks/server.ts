import { createServer, Model } from "miragejs";

createServer({
  models: { todos: Model }, //criação do banco de dados falso com miragejs

  routes() {
    this.namespace = "api";

    this.get("todos", (schema) => {
      //serve para acessar o banco de dados que foi criando em Model, esta acessando o banco de dados todos
      return schema.all("todos"); //esse schema.all("todos") retorna todos todos os registros do modelo todos
    });

    this.post("todos", (schema, request) => {
      //o request permite acessar os dados da requisição
      const createTodo = JSON.parse(request.requestBody); //aqui ele esta pegando o corpo da requisição de request por isso request.requestBody e convertendo de string para objeto com JSON.parse
      const newTodo = schema.create("todos", createTodo); //aqui ele esta criando um novo registro no modelo todos, passando o createTodo que foi pego do corpo da requisição
      return newTodo;
    });

    this.put("todos/:id", (schema, request) => {
      const id = request.params.id; //pegando o id do parametro da requisição, pega o id da url
      const jsonParse = JSON.parse(request.requestBody); //pegando o corpo da requisição e convertendo para objeto
      const updateTodo = schema.find("todos", id); //procurando o registro no modelo todos pelo id
      updateTodo?.update(jsonParse); //se existir o registro pelo id no banco ele atualiza com os dados do corpo da requisição, mas se não existir ele nem chama o update
      return {};
    });

    this.delete("todos/:id", (schema, request) => {
      const id = request.params.id; //pegando o id do parametro da requisição, pega o id da url
      const deleteData = schema.find("todos", id);
      deleteData?.destroy(); //se existir o registro pelo id no banco, ele deleta os dados da requisição, senão nem chama o destroy
      return {};
    });
  },
});
