# Modelagem lógica

Esta etapa gera uma modelagem de dados que representa a estrutura de um BD (Banco de dados) no nível de abstração visto pelo usuário do SGBD (Sistemas Gerenciadores de Bancos de Dados). O modelo lógico de um BD relacional deve definir quais as tabelas que o BD contém e, para cada tabela, definir os nomes das colunas, dentre outras características. 

Geralmente, essa etapa é resultado da conversão de uma modelagem conceitual, porém, é possível iniciar o projeto de BD, diretamente, pelo projeto lógico, especialmente quando o projetista possui o conhecimento conceitual do projeto.

?> A criação de _views_ e algumas _constraints_ estão apenas disponíveis no ambiente de [Stage](https://brmodelo-stage.herokuapp.com/#!/).

## Incluindo _Constraints_

As _constraints_ são usadas para especificar regras para os dados em uma tabela, garantindo a precisão e confiabilidade da informação. Caso ocorra qualquer violação entre a restrição e a execução de determinada ação, a ação é abortada.

No BR Modelo Web as seguintes restrições de integridade estão disponíveis:

| Nome | Descrição |
| ------------------- | ------------ |
| **Chave primária** | Identifica unicamente cada registro em uma tabela. |
| **Chave estrangeira** | É um campo (ou coleção de campos) em uma tabela, que referencia à uma chave primária em outra tabela. |
| **Not null** | Garante que uma coluna não aceite valores nulos. |
| **Unique** | Garante que todos os valores desta coluna sejam únicos. |
| **Default** | É usado para definir um valor padrão para a coluna, caso nenhum valor seja especificado. |
| **Check** | A cláusula _check(p)_ especifica um predicado P que precisa ser satisfeito em cada tupla. |
| **Auto increment** | Permite que um número único seja gerado, automaticamente, quando um novo registro é inserido em uma tabela. |

Para incluir as _constraints_, com a modelagem lógica aberta:

1. Selecione uma tabela;
1. Abra a sessão de Colunas na parte direita da tela;
1. Adicione ou edite uma coluna;
1. Inclua as _constraints_.

<video class="video-player" controls>
	<source src="logical-model/assets/constraints.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

### Regras no uso de _constraints_

- Colunas que são chave primária ou estrangeira não podem possuir valor **_default_**;
- Colunas que são chave primária, automaticamente, são **_not null_** e **_unique_**;
- Colunas com o valor **_default_** não podem ser sinalizadas como **_unique_**;
- Colunas que são chave estrangeira ou possuem valor **_default_** não podem ser sinalizadas como **_auto increment_**.

## Criando _Views_

Uma visão é uma ferramenta importante no desenvolvimento de banco de dados. Pode ser utilizada para ocultar detalhes e reduzir complexidade do BD, disponibilizar ao usuário apenas o que ele de fato necessita, ser útil como filtro de segurança ou como estratégia de gerenciamento de permissões.

### Passos para criação de _Views_:

1. Arrastar o elemento da visão do lado esquerdo para o canvas;
1. Selecione a tabela base, que pode ser uma ou mais;
1. Selecione o nome da visão;
1. Selecione as colunas da visão (colunas das tabelas base selecionadas).

<video class="video-player" controls>
	<source src="logical-model/assets/views.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

### Inserindo _query expression_:

É possível inserir uma _query expression_ de forma manual por meio do campo de texto ou clicando no _link_ 'Incluir consulta para criação da visão', que irá abrir um modal para auxiliar na criação da expressão. Passos para criar utilizando o modal:

1. Clique no _link_ 'Incluir consulta para criação da visão';
1. Clique no botão 'Adicionar condição';
1. Selecione a coluna da tabela;
1. Selecione o operador de comparação;
1. Insira o valor que será comparado;
1. Clique no botão para confirmar.

<video class="video-player" controls>
	<source src="logical-model/assets/view-query-expression.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

### Inserindo _join_ entre tabelas:

Quando a criação da visão utiliza mais de uma tabela base, é necessário informar os atributos que irão compor o _join_ dessas tabelas. Passos para criação do _join_:

1. Clique no _link_ 'Incluir consulta para criação da visão';
1. Clique no botão 'Adicionar join';
1. Selecione as colunas das tabelas à serem comparadas;
1. Clique no botão para confirmar.

<video class="video-player" controls>
	<source src="logical-model/assets/joins.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

## Convertendo para projeto físico

É possível gerar um _script_ SQL após a criação da modelagem lógica, basta clicar no ícone e irá abrir um modal com o projeto físico compatível com o SGBD MySQL. Nesse momento as informações podem ser editadas, por exemplo, incluindo a quantidade correta de cada campo _varchar_ ou _char_.

<video class="video-player" controls>
	<source src="logical-model/assets/projeto-fisico.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>