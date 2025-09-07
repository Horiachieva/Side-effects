// src/components/Modal.tsx

import { createPortal } from 'react-dom';
import css from './Modal.module.css';
import { useEffect } from 'react';

interface ModalProps {
  onClose: () => void;
}
export default function Modal({ onClose }: ModalProps) {
  // Закриття по кліку на фон
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  // Закриття по Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    // Заборона прокрутки фону
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return createPortal(
    <div
      className={css.backdrop}
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
    >
      <div className={css.modal}>
        <button
          className={css.closeButton}
          onClick={onClose}
          //   Кнопка
          //   закриття
          aria-label="Close modal"
        >
          &times;
        </button>

        <h2>Modal Title</h2>
        <p>This is some content inside the modal.</p>
      </div>
    </div>,
    document.body
  );
}

// Повторне використання

// import { createPortal } from 'react-dom';
// import css from './Modal.module.css';

// interface ModalProps {
//   onClose: () => void;
//   // Додаємо пропс children і типізуємо його
//   children: React.ReactNode;
// }

// export default function Modal({ onClose, children }: ModalProps) {
//   /* Решта коду */
//   return createPortal(
//     <div
//       className={css.backdrop}
//       onClick={handleBackdropClick}
//       role="dialog"
//       aria-modal="true"
//     >
//       <div className={css.modal}>
//         <button
//           className={css.closeButton}
//           onClick={onClose}
//           aria-label="Close modal"
//         >
//           &times;
//         </button>
//         {/* Тут рендериться переданий вміст із пропса children */}
//         {children}
//       </div>
//     </div>,
//     document.body
//   );
// }
