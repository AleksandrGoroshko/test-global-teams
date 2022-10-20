# test-global-teams

# Алгоритм дій для запуску скріпта

1. Встановити git та NodeJS на комп'ютер.
2. Відкрити консоль(cmd) або термінал в редакторі в бажаній папці для збереження проекту  - та виконати команду ```bash git clone https://github.com/AleksandrGoroshko/test-global-teams.git```
3. В тій самій папці, в тій самій консолі(або терміналі редактора) - виконати команду 
```bash npm install cypress --save-dev```
4. Далі потрібно запустити програму Cypress командою 
```bash ./node_modules/.bin/cypress```
5. У відкритому вікні програми потрібно обрати опцію  прикладів е2е тестів і після чого, в корневій папці проекту з'явиться відповідна папка з назвою е2е.
6. Далі файл globalteams-test.cy.js - потрібно перемістити в папку cypress, за адресою 
```bash cypress\e2e\globalteams-test.cy.js```
7. Після - в файл cypress.config.js - потрібно додати опції "chromeWebSecurity" та "experimentalSessionAndOrigin"
```bash 
module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "chromeWebSecurity": false,
    "experimentalSessionAndOrigin": true,
  },
});
```
8. В програмі Cypress повинен з'явитися тест globalteams-test - який готовий до коректного запуску.
