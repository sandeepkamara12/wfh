import { useEffect } from "react";

export function useOutsideClick(ref, handler) {
  useEffect(() => {
    function handleClick(event) {
      // If click is outside the referenced element
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    }

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, handler]);
}