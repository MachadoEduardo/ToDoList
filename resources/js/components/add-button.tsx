import { CirclePlus } from "lucide-react";

export default function AddButton({ onClick }) {
    return (
        <CirclePlus
            onClick={onClick}
            className="cursor-pointer hover:scale-110 transition-all"
            size={40}
        />
    );
}