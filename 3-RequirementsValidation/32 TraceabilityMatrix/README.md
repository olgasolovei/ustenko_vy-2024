### Матриця відстежування зв’язків

| **FR** | **NFR** | **US**  | **AC**                                                                                                                                      |
|--------|---------|---------|---------------------------------------------------------------------------------------------------------------------------------------------|
| FR1    | NFR1    | US1.0   | Користувач має бути успішно авторизований при введенні правильних даних, час завантаження сторінки не перевищує 3 секунд.                   |
| FR1    | NFR2    | US1.0   | Система повинна забезпечувати можливість авторизації в умовах навантаження.                                                                 |
| FR1    | NFR3    | US1.0   | Система повинна обробляти до 500 спроб авторизації користувачів на годину без затримок.                                                     |
| FR1.1  | NFR1    | US1.1   | Обліковий запис має бути заблокований на 15 хвилин після 5 невдалих спроб авторизації.                                                      |
| FR1.3  | NFR1    | US1.2   | Тимчасовий код для відновлення доступу має бути дійсним протягом 15 хвилин.                                                                 |
| FR2    | NFR4    | US2.0   | Система повинна безперебійно працювати під час навантаження.                                                                                |
| FR3    | NFR6    | US3.0   | Система повинна інформувати менеджера про небезпеку не пізніше ніж за 30 секунд від часу виявлення.                                         |
| FR4    | NFR8    | US4.0   | Користувач має можливість переглядати журнал подій із фільтрацією за датою, типом ризику та локацією, зберігаючи дані не менше 18 місяців.  |

