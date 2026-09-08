type ModalProps = {
  src: string | null;
  caption?: string | null;
  onClose: () => void;
};

export function ImageModal({ src, caption, onClose }: ModalProps) {
  if (!src) return null;

  return (
    <div className="modal" onClick={onClose}>
      <div className="modalContent" onClick={(e) => e.stopPropagation()}>
        <img src={src} alt={caption || "Gallery view"} />
        {caption && <p>{caption}</p>}
      </div>
    </div>
  );
}