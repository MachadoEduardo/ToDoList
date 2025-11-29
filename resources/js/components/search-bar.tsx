export default function SearchBar({ onChange }){
    return (
        <input 
            type="text" 
            className="border-1 border-primary rounded-sm font-lexend text-sm p-2 z-20 focus:border-secondary w-full dark:bg-card dark:text-secondary dark:focus:border-secondary-foreground" 
            placeholder="Procurar tarefa/nota..."
            onChange={(e) => onChange(e.target.value)}>
        </input>
    );
}