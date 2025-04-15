import React, { useEffect, useState } from 'react';
import { FaceApiProduct } from '../../../FaceApi/FaceApiProduct';
import ProductCard from '../../../components/ProductCard/ProductCard';
import NoutFound from "../../../assets/images/NoProductFound.png";

export default function ProductAll({ searchTerm, selectedCategory }) {
    const [shuffledProducts, setShuffledProducts] = useState([]);
    const [filterBrand, setFilterBrand] = useState("");
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

    useEffect(() => {
        setShuffledProducts(shuffleArray(FaceApiProduct));
    }, []);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 600);

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

    const shuffleArray = array => {
        const newArray = array.slice();
        for (let i = newArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
        }
        return newArray;
    };

    const filteredProducts = selectedCategory
        ? shuffledProducts.filter(product => product.category === selectedCategory)
        : shuffledProducts;

    const filterBrandFaceApi = filterBrand ? filteredProducts.filter(brand => brand.brand === filterBrand) : filteredProducts;

    const handleBrandSelect = (brand) => {
        setFilterBrand(brand);
    }

    const searchFilteredProducts = filterBrandFaceApi.filter(product =>
        product.title.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
    );

    return (
        <section className='product_all'>
            <div className="container">
                <ul data-aos="fade-right" data-aos-delay="100" className="product_brand">
                    <li className='product_brand_title'>Choose any brand:</li>
                    <ul className='product_choose_brand'>
                        <li className='product_brand_btn' onClick={() => handleBrandSelect(null)}>All Brand</li>
                        <li className='product_brand_btn' onClick={() => handleBrandSelect("Sim Sensitive")}>Sim Sensitive</li>
                        <li className='product_brand_btn' onClick={() => handleBrandSelect("Depot")}>Depot</li>
                        <li className='product_brand_btn' onClick={() => handleBrandSelect("Lock Stock & Barrel")}>Lock Stock & Barrel</li>
                        <li className='product_brand_btn' onClick={() => handleBrandSelect("Bed Head")}>Bed Head</li>
                        <li className='product_brand_btn' onClick={() => handleBrandSelect("ACCA KAPPA")}>Acca kappa</li>
                        <li className='product_brand_btn' onClick={() => handleBrandSelect("PERFUME.SUCKS")}>Perfume.Sucks</li>
                        <li className='product_brand_btn' onClick={() => handleBrandSelect("Olfactive Studio")}>Olfactive Studio</li>
                    </ul>
                </ul>

                {searchFilteredProducts.length > 0 ? (
                    <ul className="product_wrapper">
                        {searchFilteredProducts.map(item => (
                            <ProductCard key={item.id} item={item} />
                        ))}
                    </ul>
                ) : (
                    <div className='product_found_wrapper'>
                        <img className='product_found_img' src={NoutFound} alt="" />
                        <p className='product_fount_text'>Product not found</p>
                    </div>
                )}
            </div>
        </section>
    )
}
