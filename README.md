README.md
🏠 Condomínio Reserva - Sistema de Reservas (Front-end)
Este é o repositório Front-end do sistema de reservas de áreas comuns (quadras, salão de festas e quiosques) para o Condomínio Reserva.

O aplicativo foi desenvolvido utilizando tecnologias modernas para garantir uma interface rápida, responsiva e com excelente usabilidade.

🚀 Tecnologias Utilizadas
Framework: React (com Hooks e Context API)

Build Tool: Vite

Estilização: Tailwind CSS (configurado com tema claro/escuro)

Roteamento: React Router DOM

Ícones: React Icons

Datas: react-day-picker e date-fns

📂 Estrutura de Pastas
A estrutura de pastas foi organizada para escalabilidade, separando responsabilidades (componentes, layouts, páginas, contextos).

src/
├── assets/         # Imagens, ícones (Ex: logo)
├── components/     # Componentes reutilizáveis (Header, Card, PagamentoPix)
│   ├── ui/         # Elementos base (Botões, Inputs customizados)
├── contexts/       # Contextos globais (ThemeContext, AuthContext - futuro)
│   └── ThemeContext.jsx 
├── layouts/        # Estruturas de página (MainLayout)
├── pages/          # Páginas principais (Home, Login, Cadastro, DetalheEspaco)
├── services/       # Lógica de comunicação com a API (Axios/Fetch - futuro)
├── App.jsx         # Componente raiz e configuração de rotas
├── index.css       # Estilos globais e customização do calendário (DayPicker)
└── main.jsx        # Ponto de entrada (Inicializa React e ThemeProvider)
⚙️ Instalação e Execução
Para rodar o projeto em seu ambiente local, siga os passos abaixo:

Pré-requisitos
Você precisa ter o Node.js (versão 18+) e o npm instalados em sua máquina.

Passos
Clone o repositório:

Bash

git clone [URL_DO_SEU_REPOSITORIO]
cd condominio-reserva-front
Instale as dependências:

Bash

npm install
Execute o projeto:

Bash

npm run dev
O aplicativo estará acessível em http://localhost:5173/.

🎨 Funcionalidades Chave do Front-end
Design Responsivo e Moderno: Baseado no design inicial fornecido.

Tema Claro/Escuro: Alternância de tema global que afeta todas as páginas e componentes.

Fluxo de Reserva Visual: Páginas detalhadas para seleção de data e hora usando um calendário interativo.

Autenticação Pronta: Formulários de Login e Cadastro com visualização de senha e botão de Login com Google (prontos para integração com o Back-end).

🛠️ Configuração do Tailwind CSS
O Tailwind está configurado no modo de classe (darkMode: 'class') e utiliza cores personalizadas definidas em tailwind.config.js (dark-blue, green-primary, etc.).

Caminho de Configuração: tailwind.config.js

Modo Dark: Ativado pela classe dark na tag <html>, gerenciada pelo ThemeContext.