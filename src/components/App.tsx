// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function App() {
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     console.log('Effect ran!');
//     axios
//       .get('https://swapi.info/api/people/1')
//       .then(response => setPerson(response.data));
//   }, []);

//   console.log('App rendred!');

//   return (
//     <>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export default function App() {
//   const [count, setCount] = useState(1);
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     console.log('Effect ran!');
//     axios
//       .get('https://swapi.info/api/people/1')
//       .then(response => setPerson(response.data));
//   }, []); // Порожній масив залежностей

//   console.log('App rendered!');

//   return (
//     <>
//       <button onClick={() => setCount(count + 1)}>The count is {count}</button>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// import axios from 'axios';
// import { useEffect, useState } from 'react';

// export default function App() {
//   const [count, setCount] = useState(1);
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     console.log('Effect ran!');
//     axios
//       // 1. Використовуємо count в ефекті
//       .get(`https://swapi.info/api/people/${count}`)
//       .then(response => setPerson(response.data));
//   }, [count]); // 2. Додаємо count в залежності ефекта

//   console.log('App rendered!');

//   return (
//     <>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Get next character</button>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export default function App() {
//   const [count, setCount] = useState(1);
//   const [person, setPerson] = useState(null);

//   useEffect(() => {
//     // 1. Оголошуємо асинхронну функцію
//     async function fetchCharacter() {
//       const response = await axios.get(
//         `https://swapi.info/api/people/${count}`
//       );
//       setPerson(response.data);
//     }

//     // 2. Викликаємо її одразу після оголошення
//     fetchCharacter();
//   }, [count]);

//   return (
//     <>
//       <h2>The count is {count}</h2>
//       <button onClick={() => setCount(count + 1)}>Get next character</button>
//       <pre>{JSON.stringify(person, null, 2)}</pre>
//     </>
//   );
// }

// src/App.tsx

// import { useEffect, useState } from 'react';

// export default function Timer() {
//   const [time, setTime] = useState(new Date());

//   useEffect(() => {
//     // 1. Зберігаєм ідентифікатор інтервалу в змінну
//     const intervalId = setInterval(() => {
//       setTime(new Date());
//       console.log(`Interval - ${Date.now()}`);
//     }, 1000);

//     return () => {
//       // 2. Видаляємо інтервал за його id
//       clearInterval(intervalId);
//     };
//   }, []);

//   return <p>TimerBox - {time.toLocaleTimeString()}</p>;
// }

// Модалне вікно
// src/components/App.tsx
import { useState } from 'react';
import Modal from './Modal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);

  const closeModal = () => setIsModalOpen(false);

  return (
    <div>
      <h1>Main content of the page</h1>
      <button onClick={openModal}>Open modal</button>
      {isModalOpen && <Modal onClose={closeModal} />}
    </div>
  );
}
// Повторне використання
// import { useState } from 'react';
// import Modal from './Modal';

// export default function App() {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);

//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div>
//       <h1>Main content of the page</h1>
//       <button onClick={openModal}>Open modal</button>
//       {isModalOpen && (
//         <Modal onClose={closeModal}>
//            <h2>Custom Modal Content</h2>
//           <p>This is a reusable modal with dynamic content.</p>
//         </Modal>
//       )}
//
//     </div>
//   );
// }
