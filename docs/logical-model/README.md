# Modelagem lógica

A modelagem do tipo lógica representa a estrutura de um _banco de dados_ (BD) em nível de abstração visto pelo usuário do _sistemas gerenciadores de bancos de dados_ (SGBD). O modelo lógico de um banco de dados relacional deve definir quais as tabelas contidas no banco e, para cada tabela, especificar também nomes das colunas, dentre outras características. 

A modelagem lógica é geralmente resultado da conversão de uma modelagem conceitual, porém, é possível também iniciar o projeto pelo projeto lógico, especialmente quando o projetista possui o conhecimento conceitual do projeto.

## Constraints

_Constraints_ são um recurso usado para definir regras para os dados em uma tabela específica, garantindo a precisão e confiabilidade da informação. Caso ocorra qualquer violação entre a restrição e a execução de determinada ação, a ação é abortada.

No **BR Modelo Web** as seguintes restrições de integridade estão disponíveis:

| Nome | Descrição |
| ---- | --------- |
| **Chave primária** | Identifica unicamente cada registro em uma tabela. |
| **Chave estrangeira** | Atributo (ou coleção de atributos) de uma tabela que referencia à chave primária de outra tabela. |
| **Not null** | Garante que uma coluna não aceite valores nulos. |
| **Unique** | Garante que todos os valores da coluna sejam únicos. |
| **Default** | Define o valor padrão de uma coluna caso nenhum valor seja especificado. |
| **Check** | Especifica um predicado **P** (_check(p)_) que precisa ser satisfeito em cada tupla. |
| **Auto increment** | Permite que um número único seja gerado automaticamente quando um novo registro é inserido na tabela. |

!> Algumas **constraints** estão em desenvolvimento e econtram-se disponíveis apenas no [ambiente de testes](https://brmodelo-stage.herokuapp.com/#!/).

## Regras no uso de constraints

- Colunas que são **chave primária** ou **chave estrangeira** não podem possuir valor **_default_**;
- Colunas que são **chave primária** são também **_not null_** e **_unique_**;
- Colunas com o valor **default** não podem ser **_unique_**;
- Colunas que são **chave estrangeira** ou possuem valor **default** não podem ser **_auto increment_**.

## Incluindo Constraints

1. Vá para a modelagem lógica que deseja editar
1. Selecione uma tabela
1. No painel de propriedades na extremidade direita da sua tela, expanda a sessão _Colunas_
1. Selecione uma coluna existente ou adicione uma nova coluna clicando no botão _Adicionar coluna_
1. Na parte inferior do painel de detalhes da coluna, inclua as _constraints_ desejadas

<video class="video-player" controls>
	<source src="logical-model/assets/constraints.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

## Views

Uma view é o conjunto de resultados de uma consulta armazenada nos dados. Ao contrário das tabelas base, comuns em um banco de dados relacional, uma view não faz parte do esquema físico. Como um conjunto de resultados, a view é uma tabela virtual computada ou agrupada dinamicamente a partir de dados no banco quando o acesso a essa view é solicitado.

Views podem ser utilizadas para múltiplos propósitos como por exemplo:

- Ocultar detalhes
- Reduzir complexidade do banco
- Filtro de segurança
- Estratégia de gerenciamento de permissões

## Criando Views

1. Vá para a modelagem lógica que deseja editar
1. Na barra de elementos à esquerda da sua tela, arraste o elemento que deseja adicionar ao canvas
1. No painel de propriedades na extremidade direita da sua tela, selecione uma ou mais tabelas bases
1. Adicione o nome da View
1. Na área de colunas da view selecione as colunas das tabelas base selecionadas
1. Salve as alteração usando o botão "Salvar" no painel de propriedades

<video class="video-player" controls>
	<source src="logical-model/assets/views.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

## Adicionando query expression

1. Selecione a tabela que deseja adicionar a query expression
1. No painel de propriedades na extremidade direita da sua tela, clique em 'Incluir consulta para criação da visão'
1. Uma modal se abrirá. Nela clique em 'Adicionar condição'
1. Selecione a coluna da tabela
1. Um novo campo se abrirá. Nele selecione o operador de comparação
1. Um terceiro e último campo se abrirá. Nele insira o valor que será comparado
1. Confirme a adição clicando no botão à direita dos campos
1. Clique em "Confirmar" para salvar a query expression criada

<video class="video-player" controls>
	<source src="logical-model/assets/view-query-expression.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

?> Também é possível inserir query expressions de forma manual por meio do campo de texto localizado no painel de propriedades

## Inserindo _join_ entre tabelas:

Quando a criação da view utiliza mais de uma tabela base, é necessário informar os atributos que irão compor o join dessas tabelas.

1. Selecione a tabela que deseja adicionar a query expression
1. No painel de propriedades na extremidade direita da sua tela, clique em 'Incluir consulta para criação da visão'
1. Uma modal se abrirá. Nela lique em 'Adicionar join'
1. Selecione as colunas das tabelas à serem comparadas
1. Clique no botão para confirmar

<video class="video-player" controls>
	<source src="logical-model/assets/joins.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

## Convertendo para projeto físico

É possível gerar um script SQL após a criação da modelagem lógica, basta clicar no ícone e irá abrir um modal com o projeto físico compatível com o SGBD MySQL. Nesse momento as informações podem ser editadas, por exemplo, incluindo a quantidade correta de cada campo varchar ou char.

<video class="video-player" controls>
	<source src="logical-model/assets/projeto-fisico.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>