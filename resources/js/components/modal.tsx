export default function Modal({ open, onClose, children }) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded shadow-lg w-80 sm:w-96 relative dark:bg-card-foreground">
                
                <button
                    className="absolute top-2 right-2 text-primary hover:cursor-pointer hover:scale-110"
                    onClick={onClose}
                >
                    ✖
                </button>

                {children}
            </div>
        </div>
    );
}
