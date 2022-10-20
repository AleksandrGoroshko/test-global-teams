# test-global-teams

# Алгоритм дій для запуску скріпта

1. Встановити git та NodeJS на комп'ютер.
2. В бажаній папці для збереження проєкту - відкрити термінал(cmd) - та виконати команду ```git clone https://github.com/AleksandrGoroshko/test-global-teams.git``` - після чого завантажиться папка проєкту з назвою test-global-teams.
3. На цьому кроці потрібно відкрити термінал в папці test-global-teams і виконати команду: 
```npm install cypress --save-dev```
4. Далі потрібно запустити програму Cypress командою: 
```./node_modules/.bin/cypress open```
5. У відкритому вікні програми потрібно рухатися по наступним пунктам ```E2E Testing -> Continue -> Start E2E Testing in Chrome -> Scaffold example specs -> Okay, I got it!```  - після чого, в корневій папці проєкту з'явиться відповідна папка з назвою е2е, що буде знаходитися за шляхом cypress\e2e
6. Далі файл globalteams-test.cy.js що був скачаний з репозиторія git - потрібно перемістити в папку e2e, за місцерозташуванням: 
```cypress\e2e\globalteams-test.cy.js```
7. Після - в файл cypress.config.js - потрібно додати опції "chromeWebSecurity" та "experimentalSessionAndOrigin"
``` 
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
8. Браузер, відритий програмою Cypress і саму програму - потрібно закрити і запустити заново командою ```./node_modules/.bin/cypress open```
8. У відкритій програмі, переходячи по пунктам меню ```E2E Testing -> Start E2E Testing in Chrome```, в низу списка - буде знаходитись тест globalteams-test, що готовий до запуску одинарним натискання лівої кнопки миші.
