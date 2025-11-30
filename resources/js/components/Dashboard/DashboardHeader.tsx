import AddButton from '@/components/add-button';
import SearchBar from '@/components/search-bar';

export function DashboardHeader({ search, onSearchChange, onAddClick }: any) {
    return (
        <div className="flex items-center">
            <SearchBar onChange={onSearchChange} />
            <div className="ml-auto px-2">
                <AddButton onClick={onAddClick} />
            </div>
        </div>
    );
}