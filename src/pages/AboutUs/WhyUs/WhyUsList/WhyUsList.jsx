import React from 'react'

export default function WhyUsList({ Icon, title, suptitle }) {
    return (
        <li className='why_us_list'>
            <div className="whu_list_bg_icon">
                <Icon className='why_us_list_icon' />
            </div>
            <h4 className='why_us_list_title'>{title}</h4>
            <p className="why_us_list_suptitle">{suptitle}</p>
        </li>
    )
}
