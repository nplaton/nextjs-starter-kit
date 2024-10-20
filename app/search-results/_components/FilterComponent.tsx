import React from 'react';

interface FilterProps {
  filters: {
    minPrice: number;
    maxPrice: number;
    minSize: number;
    maxSize: number;
  };
  onFilterChange: (filters: FilterProps['filters']) => void;
}

const FilterComponent: React.FC<FilterProps> = ({ filters, onFilterChange }) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    onFilterChange({
      ...filters,
      [name]: Number(value),
    });
  };

  const priceOptions = [0, 25, 50, 75, 100, 125, 150];
  const sizeOptions = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

  return (
    <div className="flex flex-wrap -mx-2 mb-6">
      <div className="px-2 w-full sm:w-1/2 mb-4 sm:mb-0">
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="text-center mb-2">
            <span className="text-sm font-medium text-gray-700">Price Range (€)</span>
          </div>
          <div className="flex items-center justify-center">
            <select
              name="minPrice"
              value={filters.minPrice}
              onChange={handleInputChange}
              className="w-24 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 mr-2"
            >
              {priceOptions.map((price) => (
                <option key={`min-${price}`} value={price}>
                  {price === 150 ? '150+' : price}
                </option>
              ))}
            </select>
            <span className="mx-2">-</span>
            <select
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleInputChange}
              className="w-24 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {priceOptions.map((price) => (
                <option key={`max-${price}`} value={price}>
                  {price === 150 ? '150+' : price}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <div className="px-2 w-full sm:w-1/2">
        <div className="border border-gray-300 rounded-lg p-4">
          <div className="text-center mb-2">
            <span className="text-sm font-medium text-gray-700">Size Range (m²)</span>
          </div>
          <div className="flex items-center justify-center">
            <select
              name="minSize"
              value={filters.minSize}
              onChange={handleInputChange}
              className="w-24 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 mr-2"
            >
              {sizeOptions.map((size) => (
                <option key={`min-${size}`} value={size}>
                  {size === 50 ? '50+' : size}
                </option>
              ))}
            </select>
            <span className="mx-2">-</span>
            <select
              name="maxSize"
              value={filters.maxSize}
              onChange={handleInputChange}
              className="w-24 px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            >
              {sizeOptions.map((size) => (
                <option key={`max-${size}`} value={size}>
                  {size === 50 ? '50+' : size}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterComponent;