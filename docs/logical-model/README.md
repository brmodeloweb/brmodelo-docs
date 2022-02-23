# Modelagem lógica

Geralmente, essa etapa é resultado da conversão de uma modelagem conceitual, porém, é possível iniciar o projeto de BD, diretamente, pelo projeto lógico, especialmente quando o projetista possui o conhecimento conceitual do projeto.

?> A criação de _views_ e algumas _constraints_ estão apenas disponíveis no ambiente de [Stage](https://brmodelo-stage.herokuapp.com/#!/).

## Inclusão de _Constraints_

As _constraints_ são usadas para especificar regras para os dados em uma tabela, garantindo a precisão e confiabilidade da informação. Caso ocorra qualquer violação entre a restrição e a execução de determinada ação, a ação é abortada.

No BR Modelo Web as seguintes restrições de integridade estão disponíveis:

- **Chave primária:** Identifica unicamente cada registro em uma tabela;
- **Chave estrangeira:** É um campo (ou coleção de campos) em uma tabela, que referencia à uma chave primária em outra tabela;
- **Not null:** Garante que uma coluna não aceite valores nulos;
- **Unique:** Garante que todos os valores desta coluna sejam únicos;
- **Default:** É usado para definir um valor padrão para a coluna, caso nenhum valor seja especificado;
- **Check:** A cláusula _check(p)_ especifica um predicado P que precisa ser satisfeito em cada tupla;
- **Auto increment:** Permite que um número único seja gerado, automaticamente, quando um novo registro é inserido em uma tabela.

Vale destacar algumas regras que são importantes:

- Não é possível inserir valor **_default_** para colunas que são chave primária ou estrangeira;
- Chave primária, automaticamente, é **_not null_** e **_unique_**;
- Não é possível marcar como **_unique_** uma coluna que possui um valor **_default_**;
- Não é possível marcar como **_auto increment_** uma coluna com valor **_default_** ou chave estrangeira.

Passos para utilização de _Constraints_:

1. Vá para a tela de listagem de modelos;
1. Selecione uma modelagem lógica;
1. Selecione uma tabela;
1. Abra a sessão de Colunas na parte direita da tela;
1. Adicione ou edite uma coluna;
1. Inclua as _constraints_.

<video class="video-player" controls>
	<source src="logical-model/assets/constraints.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

## Criação de _Views_

Uma visão é uma ferramenta importante no desenvolvimento de banco de dados. Pode ser utilizada para ocultar detalhes e reduzir complexidade do BD, disponibilizar ao usuário apenas o que ele de fato necessita, ser útil como filtro de segurança ou como estratégia de gerenciamento de permissões.

Passos para criação de _Views_:

1. Arrastar o elemento da visão do lado esquerdo para o canvas;
1. Selecione a tabela base, que pode ser uma ou mais;
1. Selecione o nome da visão;
1. Selecione as colunas da visão (colunas das tabelas base selecionadas).

<video class="video-player" controls>
	<source src="logical-model/assets/views.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

É possível inserir uma _query expression_ de forma manual por meio do campo de texto, principalmente por usuários experientes com conhecimento em SQL. Para usuários com menos conhecimento é possível clicar no _link_ 'Incluir consulta para criação da visão' que irá abrir um modal que auxiliará na criação da expressão.

Ao abrir o modal o usuário pode incluir 'condições' que irão compor a _query expression_, selecionando a coluna, o operador de comparação e o valor que será comparado.

<video class="video-player" controls>
	<source src="logical-model/assets/view-query-expression.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

Quando a criação da visão utiliza mais de uma tabela base, é necessário informar os atributos que irão compor o JOIN dessas tabelas.

<video class="video-player" controls>
	<source src="logical-model/assets/joins.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>

## Conversão para projeto físico

É possível gerar um _script_ SQL após a criação da modelagem lógica, basta clicar no ícone e irá abrir um modal com o projeto físico compatível com o SGBD MySQL. Nesse momento as informações podem ser editadas, por exemplo, incluindo a quantidade correta de cada campo _varchar_ ou _char_.

<video class="video-player" controls>
	<source src="logical-model/assets/projeto-fisico.mp4" type="video/mp4">
	Desculpe, seu navegador não suporta esse formato de vídeo.
</video>