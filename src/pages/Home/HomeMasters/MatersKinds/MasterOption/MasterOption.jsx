import React from 'react';
import Button from '@mui/material/Button';
import { TbArrowNarrowRight } from "react-icons/tb";

export default function MasterOption({ foto, activeMaster, equals, title, suptitle }) {
    return (
        <>
            {activeMaster === equals &&
                <div className='masters_option'>

                    <img className='masters_option_foto' src={foto} alt="" />

                    <div className="masters_option_data">
                        <h4 className='masters_option_title'>{title}</h4>
                        <p className='masters_option_suptitle'>{suptitle}</p>
                        <div className='master_book_an'>
                            <Button variant="contained" endIcon={<TbArrowNarrowRight />}>Details</Button>
                        </div>
                    </div>

                </div>
            }
        </>
    )
}
