## Користувацькі історії

### US1.0: Авторизація користувача
**Як користувач, я хочу мати можливість увійти в систему, використовуючи логін та пароль, щоб отримати доступ до свого акаунта.**

**Критерії приймального тестування (AC1.0):**
```gherkin
Scenario: Користувач авторизується в системі
    Given користувач вводить правильні дані для входу (логін і пароль)
    When система перевіряє введені дані
    Then користувач має бути успішно авторизований
    And час реакції не перевищує 3 секунди
```

### US1.1: Блокування облікового запису після невдалої спроби авторизації
**Як користувач, я хочу, щоб моя спроба входу була заблокована після 5 невдалих спроб авторизації, щоб захистити мій акаунт від несанкціонованого доступу.**

**Критерії приймального тестування (AC1.1):**
```gherkin
Scenario: Блокування облікового запису після 5 невдалих спроб
    Given користувач намагається авторизуватися з невірними даними 5 разів
    When система визначає 5 невдалих спроб
    Then обліковий запис користувача має бути заблокований на 15 хвилин
```
### US1.2: Відновлення доступу через "Забули пароль"

**Як користувач, я хочу мати можливість відновити доступ до свого акаунта через тимчасовий код або посилання, якщо забув пароль.**

**Критерії приймального тестування (AC1.2):**
```gherkin
Scenario: Відновлення паролю через "Забули пароль"
    Given користувач натискає "Забули пароль"
    When система надсилає тимчасовий код або посилання для відновлення доступу
    Then користувач отримує код на свою електронну пошту
    And код дійсний протягом 15 хвилин
```

### US2.0: Аналіз даних від IoT пристроїв на наявність ризиків

**Як майданчик-менеджер, я хочу, щоб система автоматично аналізувала дані від IoT пристроїв на наявність ризиків, щоб зменшити ймовірність небезпечних ситуацій.**

**Критерії приймального тестування (AC2.0):**
```gherkin
Scenario: Аналіз даних від IoT пристроїв
    Given система отримує дані від IoT пристроїв
    When система автоматично аналізує дані на наявність ризиків
    Then система визначає наявність потенційних ризиків і генерує сповіщення
    And процес аналізу триває не більше 30 секунд

```

### US3.0: Генерація сповіщення про ризики

**Як майданчик-менеджер, я хочу отримувати сповіщення про ризики з локацією та типом небезпеки, щоб вчасно реагувати на потенційно небезпечні ситуації.**

**Критерії приймального тестування (AC3.0):**
```gherkin
Scenario: Генерація сповіщення про ризики
    Given система визначила наявність ризику на майданчику
    When система генерує сповіщення
    Then сповіщення містить точну локацію та тип небезпеки
    And сповіщення надходить користувачеві протягом 30 секунд
```

### US4.0: Перегляд журналу подій

**Як менеджер з безпеки, я хочу мати можливість переглядати журнал подій з фільтрами за датою, типом ризику та локацією, щоб детальніше аналізувати ситуації.**

**Критерії приймального тестування (AC4.0):**
```gherkin
Scenario: Перегляд журналу подій
    Given менеджер з безпеки входить у систему
    When він застосовує фільтри за датою, типом ризику та локацією
    Then система відображає відповідні події з журналу
    And дані зберігаються в журналі протягом 12 місяців
```