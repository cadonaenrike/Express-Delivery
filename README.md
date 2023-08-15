# Projeto Express Delivery - GrowDev 14ª Edição

Este projeto é um exemplo de configuração mínima para iniciar o desenvolvimento de uma aplicação React com TypeScript utilizando o Vite. Aqui, fornecemos uma base sólida para trabalhar com React, TypeScript e Vite, incluindo suporte a Hot Module Replacement (HMR) e algumas regras de ESLint.

## Recursos

Atualmente, utilizamos dois plugins oficiais:

- **@vitejs/plugin-react:** Este plugin usa o Babel para fornecer o Fast Refresh, que permite a atualização rápida dos componentes em desenvolvimento.
- **@vitejs/plugin-react-swc:** Esta alternativa usa o SWC para Fast Refresh.

## Expandindo a Configuração ESLint

Se você está desenvolvendo uma aplicação para produção, recomendamos expandir a configuração do ESLint para incluir regras de verificação de tipos:

1. Configure a propriedade `parserOptions` no nível superior do arquivo `.eslintrc.js` como mostrado abaixo:

```json
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
```

2. Substitua `plugin:@typescript-eslint/recommended` por `plugin:@typescript-eslint/recommended-type-checked` ou `plugin:@typescript-eslint/strict-type-checked`.

3. Opcionalmente, você pode adicionar `plugin:@typescript-eslint/stylistic-type-checked` para regras de estilo de código relacionadas a tipos.

Lembre-se de instalar o `eslint-plugin-react` e adicionar `plugin:react/recommended` e `plugin:react/jsx-runtime` à lista de extensões.

Sinta-se à vontade para explorar e expandir esta configuração para atender às necessidades específicas do seu projeto.

## Iniciando

1. Clone este repositório.
2. Instale as dependências usando `npm install`.
3. Execute o servidor de desenvolvimento com `npm run dev`.

## Contribuições

Contribuições são bem-vindas! Fique à vontade para abrir issues e pull requests para melhorias, correções ou recursos adicionais.

## Licença

Este projeto está licenciado sob a Licença MIT. Consulte o arquivo [LICENSE](LICENSE) para obter mais informações.
