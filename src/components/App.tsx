// // Варіант 1
// export default function App() {
//   const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault(); // блокує стандартну поведінку HTML-форми (перезавантаження сторінки).
//     const form = event.currentTarget; //це сама форма <form>, з якої можна зчитати всі значення.

//     const formData = new FormData(form); // створює об'єкт, який містить усі значення полів форми
//     const username = formData.get('username'); // отримує значення відповідного поля.
//     console.log('Username:', username);

//     form.reset(); //  очищає форму після відправки
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <input type="text" name="username" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// // Варіант 2 Form Actions

// export default function App() {
//   const handleSubmit = (formData: FormData) => {
//     const username = formData.get('username') as string;
//     console.log('Name:', username);
//   };

//   return (
//     <form action={handleSubmit}>
//       <input type="text" name="username" defaultValue="John Doe" />
//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// Приклад OrderForm

// src/components/App.tsx

// import OrderForm from './OrderForm';

// export default function App() {
//   const handleOrder = (data: string) => {
//     console.log('Order received from:', data);
//     // можна зберегти замовлення, викликати API, показати повідомлення тощо
//   };

//   return (
//     <>
//       <h1>Place your order</h1>
//       <OrderForm onSubmit={handleOrder} />
//     </>
//   );
// }

// Приклад 2 - HTTP запити

// src/components/App.tsx

// src/components/App.tsx

import { useState } from 'react';
import SearchForm from './SearchForm';
import type { Article } from './types/Article';
import ArticleList from './ArticleList';
// 1. Імпортуємо HTTP-функцію
import { fetchArticles } from './services/articleService';

export default function App() {
  // 1. Оголошуємо і типізуємо стан
  const [articles, setArticles] = useState<Article[]>([]);
  // 1. Додаємо стан індикатора завантаження
  const [isLoading, setIsLoading] = useState(false);
  // 1. Оголошуємо стан
  const [isError, setIsError] = useState(false);

  const handleSearch = async (topic: string) => {
    // 2. Додаємо блок try...catch
    try {
      // 2. змінюємо індикатор на true перед запитом
      setIsLoading(true);
      // 3. Скидаємо стан помилки в false перед кожним запитом
      setIsError(false);
      // 2. Використовуємо HTTP-функцію
      const data = await fetchArticles(topic);
      // 2. Записуємо дані в стан після запиту
      setArticles(data);
    } catch {
      // 4. Встановлюємо стан isError в true
      setIsError(true);
    } finally {
      // 5. Встановлюємо стан isLoading в false
      // після будь якого результату запиту
      setIsLoading(false);
    }
  };

  return (
    <div>
      <SearchForm onSubmit={handleSearch} />
      {/* 4. Відображаєм повідомлення про завантаження даних в JSX */}
      {isLoading && <p>Loading data, please wait...</p>}
      {/* 6. Використовуємо стан isError щоб показати помилку */}
      {isError && <p>Whoops, something went wrong! Please try again!</p>}

      {articles.length > 0 && <ArticleList items={articles} />}
    </div>
  );
}

//Радіокнопки

// export default function OrderForm() {
//   const handleOrder = (formData: FormData) => {
//     const delivery = formData.get('delivery') as string;
//     console.log('Delivery:', delivery);
//   };

//   return (
//     <form action={handleOrder}>
//       <fieldset>
//         <legend>Delivery method:</legend>

//         <label>
//           <input type="radio" name="delivery" value="pickup" defaultChecked />
//           Pickup
//         </label>
//         <label>
//           <input type="radio" name="delivery" value="courier" />
//           Courier
//         </label>
//         <label>
//           <input type="radio" name="delivery" value="drone" />
//           Drone delivery
//         </label>
//       </fieldset>

//       <button type="submit">Place order</button>
//     </form>
//   );
// }

// Чекбокси

// export default function OrderForm() {
//   const handleOrder = (formData: FormData) => {
//     const restrictions = formData.getAll('restrictions') as string[];
//     console.log('Dietary restrictions:', restrictions);
//   };

//   return (
//     <form action={handleOrder}>
//       <fieldset>
//         <legend>Dietary restrictions:</legend>
//         <label>
//           <input type="checkbox" name="restrictions" value="vegan" />
//           Vegan
//         </label>
//         <label>
//           <input type="checkbox" name="restrictions" value="gluten-free" />
//           Gluten-free
//         </label>
//         <label>
//           <input type="checkbox" name="restrictions" value="nut-free" />
//           Nut-free
//         </label>
//       </fieldset>

//       <button type="submit">Submit</button>
//     </form>
//   );
// }

// Випадаючий список

// import { useId } from 'react';

// export default function OrderForm() {
//   const selectId = useId();

//   const handleOrder = (formData: FormData) => {
//     const deliveryTime = formData.get('deliveryTime') as string;
//     console.log('Preferred delivery time:', deliveryTime);
//   };

//   return (
//     <form action={handleOrder}>
//       <label htmlFor={selectId}>Preferred delivery time</label>
//       <select name="deliveryTime" id={selectId} defaultValue="">
//         <option value="">-- Choose delivery time --</option>
//         <option value="morning">Morning (8:00–12:00)</option>
//         <option value="afternoon">Afternoon (12:00–16:00)</option>
//         <option value="evening">Evening (16:00–20:00)</option>
//       </select>

//       <button type="submit">Place order</button>
//     </form>
//   );
// }
