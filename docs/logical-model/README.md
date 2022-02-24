# Modelagem lógica

A modelagem do tipo lógica representa a estrutura de um _banco de dados_ (BD) em nível de abstração visto pelo usuário do  _sistemas gerenciadores de bancos de dados_ (SGBD). O modelo lógico de um banco de dados relacional deve definir quais as tabelas contidas no banco e, para cada tabela, especificar também nomes das colunas, dentre outras características. 

A modelagem lógica é geralmente resultado da conversão de uma modelagem conceitual, porém, é possível também iniciar o projet pelo projeto lógico, especialmente quando o projetista possui o conhecimento conceitual do projeto.

## Constraints

_Constraints_ são um recurso usado para definir regras para os dados em uma tabela específica pa garantindo a precisão e confiabilidade da informação. Caso ocorra qualquer violação entre a restrição e a execução de determinada ação, a ação é abortada.

No **BR Modelo Web** as seguintes restrições de integridade estão disponíveis:

| Nome | Descrição |
| ---- | --------- |
| **Chave primária** | Identifica unicamente cada registro em uma tabela. |
| **Chave estrangeira** | Campo (ou coleção de campos) de uma tabela que referencia à chave primária de outra tabela. |
| **Not null** | Garante que uma coluna não aceite valores nulos. |
| **Unique** | Garante que todos os valores da coluna sejam únicos. |
| **Default** | Define o valor padrão de uma coluna caso nenhum valor seja especificado. |
| **Check** | Especifica um predicado **P** (_check(p)_) que precisa ser satisfeito em cada tupla. |
| **Auto increment** | Permite que um número único seja gerado automaticamente quando um novo registro é inserido na tabela. |

!> Algumas _constraints_ estão em desenvolvimento e econtram-se disponíveis apenas no [ambiente de testes](https://brmodelo-stage.herokuapp.com/#!/).

## Incluindo _Constraints_


1. Vá para a modelagem lógica que deseja editar
1. Selecione uma tabela
1. No painel de propriedades na extremidade direita da sua tela, expanda a sessão _Colunas_
1. Selecione uma coluna ou adiciona uma nova coluna clicando no botão _Adicionar coluna_
1. Na parte inferior do painel de detalhes da coluna, inclua as _constraints_ desejadas

<video class="video-player" controls>
	<source src="logical-model/assets/constraints.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

### Regras no uso de _constraints_

- Colunas que são **chave primária** ou **chave estrangeira** não podem possuir valor **_default_**;
- Colunas que são **chave primária** são também **_not null_** e **_unique_**;
- Colunas com o valor **default** não podem ser **_unique_**;
- Colunas que são **chave estrangeira** ou possuem valor **default** não podem ser **_auto increment_**.

## Views

_Views_ podem ser utilizadas de muitas formas como por exemplo para ocultar detalhes, reduzir complexidade do banco de dados,, como filtro de segurança ou estratégia de gerenciamento de permissões.

## Criando _Views_

1. Vá para a modelagem lógica que deseja editar
1. Na barra de elementos à esquerda da sua tela, arraste o elemento que deseja adicionar ao canvas
1. No painel de propriedades na extremidade direita da sua tela, selecione uma ou mais tabelas bases
1. Adicione o nome da visão
1. Na área de _colunas da visão_ selecione as colunas das tabelas base selecionadas
1. Salve as alteração usando o botão _Salvar_ no painel de propriedades

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