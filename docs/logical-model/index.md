---
title: Modelagem lógica
description: Entenda o que é a modelagem lógica de banco de dados no BR Modelo Web e como trabalhar com constraints, views e projeto físico.
---

# Modelagem lógica

A modelagem do tipo lógica representa a estrutura de um _banco de dados_ (BD) em nível de abstração visto pelo usuário do _sistemas gerenciadores de bancos de dados_ (SGBD). O modelo lógico de um banco de dados relacional deve definir quais as tabelas contidas no banco e, para cada tabela, especificar também nomes das colunas, dentre outras características.

A modelagem lógica é geralmente resultado da conversão de uma modelagem conceitual, porém, é possível também iniciar o projeto pelo projeto lógico, especialmente quando o projetista possui o conhecimento conceitual do projeto.

Nessa sessão:

- [Constraints](/logical-model/constraints) — restrições de integridade disponíveis e como usá-las
- [Views](/logical-model/views) — criação de views, query expressions e joins
- [Convertendo para projeto físico](/logical-model/projeto-fisico) — geração do script SQL
