import { useEffect } from "react";
import "./DetailsModals.css";

export default function DetailsModals({ onHide, children }) {
  useEffect(() => {
    const checkkey = (event) => {
          console.log(event);
        if (event.keyCode === 27) {
            onHide();
        }
    };

    window.addEventListener('keydown', checkkey);

    return () => window.removeEventListener('keydown', checkkey)
  });

  return (
    <div className="modal-parent active">
      <div className="details-modal">
        {children}
      </div>
    </div>
  );
}
