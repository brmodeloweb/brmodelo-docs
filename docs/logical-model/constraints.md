---
title: Constraints
description: Restrições de integridade disponíveis no BR Modelo Web, regras de uso e como incluir constraints nas colunas de uma tabela.
---

# Constraints

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
	<source src="/logical-model/assets/constraints.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>
