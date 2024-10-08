# Калькулятор валют

Добро пожаловать в проект Калькулятор валют! Это простое веб-приложение для конвертации между различными валютами с использованием актуальных обменных курсов.

## Живой демо

Вы можете посмотреть рабочую версию Калькулятора валют по ссылке [Демо Калькулятор валют](https://currencycalc-alex13slem.netlify.app).
Ссылка на GitHub: [https://github.com/alex13slem/CurrencyCalc](https://github.com/alex13slem/CurrencyCalc)

## Функции

- Конвертация между различными валютами.
- Актуальные обменные курсы, загружаемые через API.
- Удобный интерфейс с выбором валют и полями ввода.
- Обмен валют с помощью одной кнопки.

## Технологии

- SvelteKit: Фреймворк для создания приложения.
- Svelte: Фреймворк для построения пользовательского интерфейса.
- Axios: Для выполнения HTTP-запросов и получения курсов валют.
- TypeScript: Для статической типизации.
- Tailwind CSS: Для стилизации.

## Установка

Чтобы запустить проект локально, выполните следующие шаги:

1. Клонируйте репозиторий

   ```bash
    git clone https://github.com/ваше-имя-пользователя/currency-calculator.git
   ```

2. Перейдите в директорию проекта

   ```bash
   cd currency-calculator
   ```

3. Установите зависимости

   Убедитесь, что у вас установлен Node.js и PNPM. Затем выполните:

   ```bash
   pnpm install
   ```

4. Запустите сервер разработки

   ```bash
    pnpm run dev
   ```

Откройте браузер и перейдите по адресу <http://localhost:5173>, чтобы увидеть приложение в действии.

## Использование

- Введите сумму в поле ввода основной валюты.
- Выберите основную и целевую валюту с помощью выпадающих списков.
- Соответствующее значение в целевой валюте будет рассчитано и отображено.
- Нажмите кнопку обмена, чтобы поменять основную и целевую валюты местами.

## API

Приложение загружает обменные курсы валют с помощью API. Убедитесь, что у вас есть доступ к API или измените конечные точки API в коде соответственно.

## Содействие

Не стесняйтесь открывать проблемы или создавать запросы на внесение изменений, если у вас есть предложения по улучшению приложения.
