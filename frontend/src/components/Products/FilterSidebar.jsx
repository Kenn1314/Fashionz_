import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';

const FilterSideBar = () => {
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [priceRange, setPriceRange] = useState([0, 100]);
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  })

  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy"
  ]
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = ["Cotton", "Wool", "Denim", "Polyester", "Silk", "Linen", "Viscose", "Fleece"];
  const brands = ["Urban Threads", "Modern Fit", "Street Style", "Beach Breeze", "Fashionista", "ChicStyle"];
  const genders = ["Men", "Women"]

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    console.log({ name, value, checked, type })

    let newFilters = { ...filters };

    if (type == "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value]
      } else {
        newFilters[name] = newFilters[name].filter(item => item !== value)
      }
    } else {
      newFilters[name] = value
    }

    setFilters(newFilters);
    console.log(newFilters)

    updateURLParams(newFilters)
  }

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();

    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(","))
      } else if (newFilters[key]) {
        params.append(key, newFilters[key])
      }
    })

    setSearchParams(params);
    navigate(`?${params.toString()}`)
  }

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;

    setPriceRange([0, newPrice])

    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice }
    setFilters(newFilters);

    updateURLParams(newFilters)
  }

  useEffect(() => {
    const params = Object.fromEntries([...searchParams])
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    })

    setPriceRange([0, params.maxPrice || 100])
  }, [searchParams]);

  return (
    <div className='p-4'>
      <h3 className="text-xl font-semibold mb-4 text-gray-900">Filter</h3>

      {/* Category */}
      <div className="mb-4">
        <h3 className="text-l text-gray-700 mb-4">Category</h3>
        {
          categories.map((item, key) => (
            <>
              <div class="flex items-center mb-4">
                <input id={`category-radio-${key}`} checked={filters.category === item} onChange={handleFilterChange} type="radio" value={`${item}`} name={`category`} class="w-4 h-4 text-blue-500 bg-gray-300 focus:ring-blue-400" />
                <label for={`category-radio-${key}`} class="ms-2 text-sm text-gray-700">{item}</label>
              </div>
            </>
          ))
        }
      </div>

      {/* Gender */}
      <div className="mb-4">
        <h3 className="text-l text-gray-700 mb-4">Genders</h3>
        {
          genders.map((item, key) => (
            <>
              <div class="flex items-center mb-4">
                <input id={`gender-radio-${key}`} checked={filters.gender === item} onChange={handleFilterChange} type="radio" value={`${item}`} name={`gender`} class="w-4 h-4 text-blue-500 bg-gray-300 focus:ring-blue-400" />
                <label for={`gender-radio-${key}`} class="ms-2 text-sm text-gray-700">{item}</label>
              </div>
            </>
          ))
        }
      </div>

      {/* Colors */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Color</label>
        <div className="flex flex-wrap gap-2">
          {
            colors.map((item, key) => (
              <button
                key={item}
                name={"color"}
                value={item}
                onClick={handleFilterChange}
                className={`${filters.color == item ? "ring-2 ring-blue-500" : ""} w-8 h-8 rounded-full border-gray-300 cursor-pointer transition hover:scale-105`}
                style={{ backgroundColor: item.toLowerCase() }}
              >
              </button>
            ))
          }
        </div>
      </div>

      {/* Size */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Size</label>
        {
          sizes.map((item, key) => (
            <div key={item} className="flex items-center mb-1">
              <input type="checkbox" name="size" checked={filters.size.includes(item)} value={item} onChange={handleFilterChange} className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))
        }
      </div>

      {/* Material */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Materials</label>
        {
          materials.map((item, key) => (
            <div key={item} className="flex items-center mb-1">
              <input type="checkbox" name="material" checked={filters.material.includes(item)} value={item} onChange={handleFilterChange} className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))
        }
      </div>

      {/* Brands */}
      <div className="mb-6">
        <label className="block text-gray-600 font-medium mb-2">Brands</label>
        {
          brands.map((item, key) => (
            <div key={item} className="flex items-center mb-1">
              <input type="checkbox" name="brand" checked={filters.brand.includes(item)} value={item} onChange={handleFilterChange} className="mr-2 h-4 w-4 text-blue-500 focus:ring-blue-400 border-gray-300" />
              <span className="text-gray-700">{item}</span>
            </div>
          ))
        }
      </div>

      {/* Price range filter */}
      <div className="mb-8">
        <label className="block text-gray-600 font-medium mb-2">Price Range</label>
        <input type="range" name="priceRange" value={priceRange[1]} onChange={handlePriceChange} min={0} max={100} className="w-full h-2 bg-gray-300 rounded-lg appearance-none cursor-pointer" />
        <div className="flex justify-between text-gray-600 mt-2">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  )
}

export default FilterSideBar;