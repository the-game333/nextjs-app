import { Ref, useEffect, useRef, useState } from 'react';

export const useHover = <T extends HTMLElement = HTMLElement>(): [Ref<T>, boolean] => {
  const ref = useRef<T>(null);
  const [state, setState] = useState<boolean>(false);

  useEffect(() => {
    const el = ref.current;
    if (el) {
      el.addEventListener('mouseenter', () => setState(true));
      el.addEventListener('mouseleave', () => setState(false));

      return () => {
        el.removeEventListener('mouseenter', () => setState(true));
        el.removeEventListener('mouseleave', () => setState(false));
      };
    }
  }, []);

  return [ref, state];
};
