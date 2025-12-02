import { CirclePlus } from "lucide-react";

export default function AddButton({ onClick }: { onClick: () => void }) {
    return (
        <CirclePlus
            onClick={onClick}
            className="cursor-pointer hover:scale-110 transition-all text-primary"
            size={30}
        />
    );
}