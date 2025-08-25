import { useState } from 'react';
import { Search, Filter, X } from 'lucide-react';
import { SearchFilters } from '@shared/types';
import { getAllTags } from '@/data/mockData';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Popover, 
  PopoverContent, 
  PopoverTrigger 
} from '@/components/ui/popover';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';

interface SearchAndFilterProps {
  filters: SearchFilters;
  onFiltersChange: (filters: SearchFilters) => void;
  resultsCount: number;
}

const SearchAndFilter = ({ filters, onFiltersChange, resultsCount }: SearchAndFilterProps) => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const allTags = getAllTags();

  const handleQueryChange = (query: string) => {
    onFiltersChange({ ...filters, query });
  };

  const handleTypeChange = (type: SearchFilters['type']) => {
    onFiltersChange({ ...filters, type });
  };

  const handleTagToggle = (tag: string) => {
    const newTags = filters.tags.includes(tag)
      ? filters.tags.filter(t => t !== tag)
      : [...filters.tags, tag];
    onFiltersChange({ ...filters, tags: newTags });
  };

  const clearFilters = () => {
    onFiltersChange({ query: '', type: 'all', tags: [] });
  };

  const hasActiveFilters = filters.query || filters.type !== 'all' || filters.tags.length > 0;

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search blogs and projects..."
          value={filters.query}
          onChange={(e) => handleQueryChange(e.target.value)}
          className="pl-10 pr-4"
        />
      </div>

      {/* Filters Row */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="flex flex-wrap gap-3 items-center">
          {/* Content Type Filter */}
          <Select value={filters.type} onValueChange={handleTypeChange}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Content</SelectItem>
              <SelectItem value="blog">Blogs Only</SelectItem>
              <SelectItem value="project">Projects Only</SelectItem>
            </SelectContent>
          </Select>

          {/* Tags Filter */}
          <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="gap-2">
                <Filter className="h-4 w-4" />
                Tags
                {filters.tags.length > 0 && (
                  <Badge variant="secondary" className="ml-1 px-1 text-xs">
                    {filters.tags.length}
                  </Badge>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-4" align="start">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium">Filter by Tags</h4>
                  {filters.tags.length > 0 && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => onFiltersChange({ ...filters, tags: [] })}
                    >
                      Clear
                    </Button>
                  )}
                </div>
                <Separator />
                <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto">
                  {allTags.map((tag) => (
                    <div
                      key={tag}
                      className={`p-2 rounded-lg border cursor-pointer transition-colors ${
                        filters.tags.includes(tag)
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'hover:bg-accent'
                      }`}
                      onClick={() => handleTagToggle(tag)}
                    >
                      <span className="text-sm">{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </PopoverContent>
          </Popover>

          {/* Clear Filters */}
          {hasActiveFilters && (
            <Button variant="ghost" size="sm" onClick={clearFilters} className="gap-1">
              <X className="h-4 w-4" />
              Clear
            </Button>
          )}
        </div>

        {/* Results Count */}
        <div className="text-sm text-muted-foreground">
          {resultsCount} {resultsCount === 1 ? 'result' : 'results'} found
        </div>
      </div>

      {/* Active Tags */}
      {filters.tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {filters.tags.map((tag) => (
            <Badge 
              key={tag} 
              variant="secondary" 
              className="gap-1 pr-1"
            >
              {tag}
              <Button
                variant="ghost"
                size="sm"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => handleTagToggle(tag)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchAndFilter;
