import { defineConfig } from 'vitepress'

// Redireciona URLs antigas do Docsify (roteamento hash) para as novas URLs.
// O fragmento nunca chega ao servidor, então esse redirect precisa ser client-side.
const legacyHashRedirect = `;(function(){
  var h = location.hash
  if (h.indexOf('#/') !== 0) return
  var p = h.slice(2)
  var id = ''
  var q = p.indexOf('?id=')
  if (q > -1) {
    try { id = decodeURIComponent(p.slice(q + 4)) } catch (e) { id = p.slice(q + 4) }
    p = p.slice(0, q)
  }
  p = p.replace(/README(\\.md)?$/, '').replace(/^\\/+|\\/+$/g, '')
  var map = {
    'criar-um-novo-modelo': '/basics/criar-um-novo-modelo',
    'duplicar-um-modelo': '/basics/duplicar-um-modelo',
    'renomear-um-modelo': '/basics/renomear-um-modelo',
    'excluir-um-modelo': '/basics/excluir-um-modelo',
    'compartilhar-um-modelo': '/basics/compartilhar-um-modelo',
    'importar-um-modelo': '/basics/importar-um-modelo',
    'adicionando-elementos': '/canvas-usage/adicionando-elementos',
    'renomeando-elementos': '/canvas-usage/renomeando-elementos',
    'removendo-elementos': '/canvas-usage/removendo-elementos',
    'alterando-informações-de-um-elemento': '/canvas-usage/alterando-informacoes-de-um-elemento',
    'alterando-informacoes-de-um-elemento': '/canvas-usage/alterando-informacoes-de-um-elemento',
    'copiando-e-colando-elementos': '/canvas-usage/copiando-e-colando-elementos',
    'conectando-elementos': '/canvas-usage/conectando-elementos',
    'desfazer-ou-refazer-ações': '/canvas-usage/desfazer-ou-refazer-acoes',
    'desfazer-ou-refazer-acoes': '/canvas-usage/desfazer-ou-refazer-acoes',
    'utilizando-o-zoom': '/canvas-navigation/utilizando-o-zoom',
    'expandindo-o-canvas': '/canvas-navigation/expandindo-o-canvas',
    'movendo-livremente-pelo-canvas': '/canvas-navigation/movendo-livremente-pelo-canvas',
    'constraints': '/logical-model/constraints',
    'regras-no-uso-de-constraints': '/logical-model/constraints#regras-no-uso-de-constraints',
    'incluindo-constraints': '/logical-model/constraints#incluindo-constraints',
    'views': '/logical-model/views',
    'criando-views': '/logical-model/views#criando-views',
    'adicionando-query-expression': '/logical-model/views#adicionando-query-expression',
    'inserindo-join-entre-tabelas': '/logical-model/views#inserindo-join-entre-tabelas',
    'convertendo-para-projeto-físico': '/logical-model/projeto-fisico',
    'convertendo-para-projeto-fisico': '/logical-model/projeto-fisico'
  }
  var target = '/'
  var dir = p.split('/')[0]
  if (id && map[id]) target = map[id]
  else if (dir && ['basics', 'canvas-usage', 'canvas-navigation', 'logical-model'].indexOf(dir) > -1) target = '/' + dir + '/'
  location.replace(target)
})();`

export default defineConfig({
  lang: 'pt-BR',
  title: 'brmodelo',
  description:
    'Documentação oficial de uso do brmodelo, ferramenta open source para modelagem de banco de dados entidade-relacionamento.',
  cleanUrls: true,
  lastUpdated: true,
  // Sem o painel direito ("Nesta página") o conteúdo centraliza na área útil.
  // Páginas longas podem reativá-lo com `aside: true` no frontmatter.
  transformPageData(pageData) {
    pageData.frontmatter.aside ??= false
  },
  sitemap: {
    hostname: 'https://docs.brmodeloweb.com'
  },
  markdown: {
    container: {
      tipLabel: 'DICA',
      warningLabel: 'ATENÇÃO',
      dangerLabel: 'CUIDADO',
      infoLabel: 'INFO',
      detailsLabel: 'Detalhes'
    }
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/assets/favicon@2x.png', sizes: '62x62' }],
    ['script', {}, legacyHashRedirect],
    ['script', { async: '', src: 'https://www.googletagmanager.com/gtag/js?id=G-25ET2EQ9BE' }],
    [
      'script',
      {},
      "window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-25ET2EQ9BE');"
    ]
  ],
  themeConfig: {
    siteTitle: 'BRMW',
    nav: [
      { text: 'Abrir o brmodelo', link: 'https://app.brmodeloweb.com' },
      { text: 'brmodeloweb.com', link: 'https://www.brmodeloweb.com' }
    ],
    sidebar: [
      { text: 'Bem vindo à documentação', link: '/' },
      {
        text: 'O básico',
        collapsed: false,
        items: [
          { text: 'Visão geral', link: '/basics/' },
          { text: 'Criar um novo modelo', link: '/basics/criar-um-novo-modelo' },
          { text: 'Duplicar um modelo', link: '/basics/duplicar-um-modelo' },
          { text: 'Renomear um modelo', link: '/basics/renomear-um-modelo' },
          { text: 'Excluir um modelo', link: '/basics/excluir-um-modelo' },
          { text: 'Compartilhar um modelo', link: '/basics/compartilhar-um-modelo' },
          { text: 'Importar um modelo', link: '/basics/importar-um-modelo' }
        ]
      },
      {
        text: 'Usando o canvas',
        collapsed: false,
        items: [
          { text: 'Visão geral', link: '/canvas-usage/' },
          { text: 'Adicionando elementos', link: '/canvas-usage/adicionando-elementos' },
          { text: 'Renomeando elementos', link: '/canvas-usage/renomeando-elementos' },
          { text: 'Removendo elementos', link: '/canvas-usage/removendo-elementos' },
          {
            text: 'Alterando informações de um elemento',
            link: '/canvas-usage/alterando-informacoes-de-um-elemento'
          },
          { text: 'Copiando e colando elementos', link: '/canvas-usage/copiando-e-colando-elementos' },
          { text: 'Conectando elementos', link: '/canvas-usage/conectando-elementos' },
          { text: 'Desfazer ou refazer ações', link: '/canvas-usage/desfazer-ou-refazer-acoes' }
        ]
      },
      {
        text: 'Navegando pelo canvas',
        collapsed: false,
        items: [
          { text: 'Visão geral', link: '/canvas-navigation/' },
          { text: 'Utilizando o zoom', link: '/canvas-navigation/utilizando-o-zoom' },
          { text: 'Expandindo o canvas', link: '/canvas-navigation/expandindo-o-canvas' },
          {
            text: 'Movendo livremente pelo canvas',
            link: '/canvas-navigation/movendo-livremente-pelo-canvas'
          }
        ]
      },
      {
        text: 'Modelagem lógica',
        collapsed: false,
        items: [
          { text: 'Visão geral', link: '/logical-model/' },
          { text: 'Constraints', link: '/logical-model/constraints' },
          { text: 'Views', link: '/logical-model/views' },
          { text: 'Convertendo para projeto físico', link: '/logical-model/projeto-fisico' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/brmodeloweb/brmodelo-docs' }],
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Busca', buttonAriaLabel: 'Busca' },
          modal: {
            displayDetails: 'Exibir detalhes',
            resetButtonTitle: 'Limpar busca',
            noResultsText: 'Nenhum resultado encontrado para',
            footer: {
              selectText: 'para selecionar',
              navigateText: 'para navegar',
              closeText: 'para fechar'
            }
          }
        }
      }
    },
    outline: { label: 'Nesta página' },
    docFooter: { prev: 'Anterior', next: 'Próximo' },
    lastUpdated: { text: 'Atualizado em' },
    darkModeSwitchLabel: 'Aparência',
    sidebarMenuLabel: 'Menu',
    returnToTopLabel: 'Voltar ao topo'
  }
})
