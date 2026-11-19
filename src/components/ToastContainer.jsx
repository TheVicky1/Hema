import React, { useCallback, useEffect, useState } from "react";
import { CheckCircle2, Heart, AlertCircle, X } from "lucide-react";
import { setToastHandler } from "../utils/toast";

let _id = 0;

export default function ToastContainer() {
  const [toasts, setToasts] = useState([]);

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, exit: true } : t)));
    setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 280);
  }, []);

  const add = useCallback(
    (options) => {
      const id = ++_id;
      setToasts((prev) => [...prev, { id, type: "info", ...options }]);
      setTimeout(() => dismiss(id), options.duration ?? 4200);
    },
    [dismiss]
  );

  useEffect(() => {
    setToastHandler(add);
    return () => { setToastHandler(null); };
  }, [add]);

  const icons = {
    success: <CheckCircle2 size={15} />,
    info:    <Heart size={15} />,
    error:   <AlertCircle size={15} />,
  };

  return (
    <div className="toast-stack" role="region" aria-label="Notifications" aria-live="polite">
      {toasts.map((t) => (
        <div key={t.id} className={`toast${t.exit ? " exit" : ""}`} role="alert">
          <div className={`toast-icon ${t.type}`}>
            {icons[t.type] ?? icons.info}
          </div>
          <div className="toast-body">
            {t.title   && <div className="toast-title">{t.title}</div>}
            {t.message && <div className="toast-message">{t.message}</div>}
          </div>
          <button className="toast-dismiss" onClick={() => dismiss(t.id)} aria-label="Dismiss">
            <X size={13} />
          </button>
        </div>
      ))}
    </div>
  );
}
