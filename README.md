# 📰 Portal de Notícias Dinâmico

Um front-end moderno para um portal de notícias que organiza e exibe conteúdo automaticamente baseando-se na data de publicação. O projeto foca em uma **hierarquia visual rígida**, distribuindo as notícias por relevância e tamanho.

## 🚀 Funcionalidades

* **Ordenação Cronológica Automática:** O sistema recebe um JSON de notícias, ordena da mais recente para a mais antiga e distribui nos containers apropriados.
* **Layout em Grid Hierárquico:**
    1.  **Destaque Principal:** 1 notícia grande (topo).
    2.  **Secundárias:** 2 notícias médias (lado a lado).
    3.  **Terciárias:** 8 notícias pequenas (2 linhas de 4 colunas).
    4.  **Quaternárias:** 32 notícias mini (4 linhas de 8 colunas).
* **Sidebar Dinâmica:** Todas as notícias excedentes (mais antigas) são listadas automaticamente na barra lateral.
* **Navegação por Categorias:** Estrutura pronta para filtrar por Política, Esportes, Entretenimento, etc.
* **Design Responsivo:** Utilização de CSS Grid e Flexbox para organização dos elementos.

## 🛠️ Tecnologias Utilizadas

* **HTML5:** Estrutura semântica.
* **CSS3:** Estilização avançada com Grid Layout e Flexbox.
* **JavaScript (Vanilla ES6+):** Lógica de ordenação (`sort`), manipulação do DOM e consumo de dados assíncronos (`async/await`).

## 📂 Estrutura do Projeto

```text
/
├── index.html          # Página inicial (Lógica de Grid Hierárquico)
├── categoria.html      # Página de listagem por categoria
├── noticia.html        # Página de detalhes da notícia
├── db_noticias.js      # Mock/Simulação do Banco de Dados (JSON)
├── css/
│   └── style.css       # Estilos globais e regras de grid
└── img/
    └── [imagens...]    # Imagens das notícias
