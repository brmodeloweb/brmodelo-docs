---
title: Views
description: O que são views, como criá-las no brmodelo e como adicionar query expressions e joins entre tabelas.
---

# Views

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
	<source src="/logical-model/assets/views.mp4" type="video/mp4">
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
	<source src="/logical-model/assets/view-query-expression.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

::: tip
Também é possível inserir query expressions de forma manual por meio do campo de texto localizado no painel de propriedades
:::

## Inserindo _join_ entre tabelas

Quando a criação da view utiliza mais de uma tabela base, é necessário informar os atributos que irão compor o join dessas tabelas.

1. Selecione a tabela que deseja adicionar a query expression
1. No painel de propriedades na extremidade direita da sua tela, clique em 'Incluir consulta para criação da visão'
1. Uma modal se abrirá. Nela lique em 'Adicionar join'
1. Selecione as colunas das tabelas à serem comparadas
1. Clique no botão para confirmar

<video class="video-player" controls>
	<source src="/logical-model/assets/joins.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>
