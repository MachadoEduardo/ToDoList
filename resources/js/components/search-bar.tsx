export default function SearchBar({ onChange }){
    return (
        <input 
            type="text" 
            className="border-1 border-primary rounded-sm font-lexend text-sm p-2 z-20 focus:border-secondary w-xl" 
            placeholder="Procurar tarefa/nota..."
            onChange={(e) => onChange(e.target.value)}>
        </input>
    );
}