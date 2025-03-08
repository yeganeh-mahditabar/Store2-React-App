import { useEffect } from "react";

export default function Modal({ children, onClose, onHide }) {
  useEffect(() => {
    const checkkey = (event) => {
      console.log(event);
      if (event.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener("keydown", checkkey);

    return () => window.removeEventListener("keydown", checkkey);
  }, [onClose, onHide]);

  return <div className="modal-parent active">{children}</div>;
}
