import "./Modal.css";

export default function Modal({ show, onClose, title, message }) {
  if (!show) return;
  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>{title}</h2>
        <p>{message}</p>
        <button onClick={onClose}>Kapat</button>
      </div>
    </div>
  );
}
