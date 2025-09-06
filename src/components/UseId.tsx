import { useId } from 'react';

export default function OrderForm() {
  const nameId = useId();
  const emailId = useId();

  return (
    <form>
      <label htmlFor={nameId}>Name</label>
      <input type="text" name="username" id={nameId} />

      <label htmlFor={emailId}>Email</label>
      <input type="email" name="email" id={emailId} />

      <button type="submit">Place order</button>
    </form>
  );
}

// import { useId } from 'react';

// export default function OrderForm() {
//   const fieldId = useId();

//   return (
//     <form>
//       <label htmlFor={`${fieldId}-username`}>Name</label>
//       <input type="text" name="username" id={`${fieldId}-username`} />

//       <label htmlFor={`${fieldId}-email`}>Email</label>
//       <input type="email" name="email" id={`${fieldId}-email`} />

//       <button type="submit">Place order</button>
//     </form>
//   );
// }
