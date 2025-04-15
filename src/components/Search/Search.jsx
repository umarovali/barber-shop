import React, { useEffect, useState } from 'react';
import { LuSearch, LuSearchX } from "react-icons/lu";
import { MdArrowDropDown } from "react-icons/md";
import { IoMdArrowDropup } from "react-icons/io";
import Button from '@mui/material/Button';

const SearchProduct = ({ setSelectedCategory, searchTerm, setSearchTerm }) => {
    const [expanded, setExpanded] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [spanClass, setSpanClass] = useState('');

    const handleClick = () => {
        if (expanded) {
            setSearchTerm('');
        }
        setExpanded(!expanded);
    };

    const handleCategoryClick = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
        setSelectedCategory(option);
    };

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    }

    useEffect(() => {
        if (showOptions || selectedOption) {
            setSpanClass('span');
        } else {
            setSpanClass('');
        }
    }, [showOptions, selectedOption]);

    return (
        <section style={{ backgroundImage: "url('https://preview.colorlib.com/theme/trim/images/bg_4.jpg.webp')" }} className='search'>
            <div className="search_bg">
                <div className="container">
                    <div className="search_wrapper">
                        <div>
                            <div className={`search_left ${expanded ? 'expanded' : ''}`}>
                                <input
                                    type="text"
                                    placeholder={`${expanded ? 'Search product' : ''}`}
                                    value={searchTerm}
                                    onChange={handleSearchChange}
                                />
                                <button onClick={handleClick}>{expanded ? <LuSearchX /> : <LuSearch />}</button>
                            </div>
                        </div>

                        <div className="search_right" >
                            <Button variant="contained" onClick={handleCategoryClick} endIcon={showOptions || selectedOption ? <IoMdArrowDropup className='btn_icon' /> : <MdArrowDropDown className='btn_icon' />}>
                                <span className={spanClass}>All Category</span>
                                {selectedOption || ''}
                            </Button>

                            {showOptions && (
                                <ul className="search_options">
                                    <li onClick={() => handleOptionClick('')}>All Category</li>
                                    <li onClick={() => handleOptionClick('Fragrances')}>Fragrances</li>
                                    <li onClick={() => handleOptionClick('Eau de parfum')}>Eau de parfum</li>
                                    <li onClick={() => handleOptionClick('Hair styling')}>Hair styling</li>
                                    <li onClick={() => handleOptionClick('Hair Care')}>Hair Care</li>
                                </ul>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

const SearchHairstyle = ({ searchHairstyle, setSearchHairstyle, setCategoryHairstyle }) => {
    const [expanded, setExpanded] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [spanClass, setSpanClass] = useState('');

    const handleClick = () => {
        if (expanded) {
            setSearchHairstyle('');
        }
        setExpanded(!expanded);
    };

    const handleCategoryClick = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionClick = (option) => {
        setSelectedOption(option);
        setShowOptions(false);
        setCategoryHairstyle(option);
    };

    const handleSearchChange = (event) => {
        setSearchHairstyle(event.target.value);
    }

    useEffect(() => {
        if (showOptions || selectedOption) {
            setSpanClass('span');
        } else {
            setSpanClass('');
        }
    }, [showOptions, selectedOption]);

    return (
        <section style={{ backgroundImage: "url('https://preview.colorlib.com/theme/trim/images/bg_4.jpg.webp')" }} className='search'>
            <div className="search_bg">
                <div className="container">
                    <div className="search_wrapper">
                        <div>
                            <div className={`search_left ${expanded ? 'expanded' : ''}`}>
                                <input
                                    type="text"
                                    placeholder={`${expanded ? 'Search hairstyle' : ''}`}
                                    value={searchHairstyle}
                                    onChange={handleSearchChange}
                                />
                                <button onClick={handleClick}>{expanded ? <LuSearchX /> : <LuSearch />}</button>
                            </div>
                        </div>

                        <div className="search_right">
                            <Button variant="contained" onClick={handleCategoryClick} endIcon={showOptions || selectedOption ? <IoMdArrowDropup className='btn_icon' /> : <MdArrowDropDown className='btn_icon' />}>
                                <span className={spanClass}>All Hair</span>
                                {selectedOption || ''}
                            </Button>

                            {showOptions && (
                                <div data-aos="flip-up" className="search_options">
                                    <ul>
                                        <li onClick={() => handleOptionClick('')}>All Hair</li>
                                        <li onClick={() => handleOptionClick('For short hair')}>For short hair</li>
                                        <li onClick={() => handleOptionClick('For middle hair')}>For middle hair</li>
                                        <li onClick={() => handleOptionClick('For long hair')}>For long hair</li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { SearchProduct, SearchHairstyle };