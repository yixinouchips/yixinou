import { useEffect } from 'react';
import { X } from 'lucide-react';

export default function Lightbox({ src, alt, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);
  return (
    <div className="lightbox" onClick={onClose} role="presentation">
      <button type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>
        <X size={26} />
      </button>
      <img src={src} alt={alt || 'Enlarged image'} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
