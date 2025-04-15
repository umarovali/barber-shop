import React from 'react';
import BookAnImg from "../../../assets/images/BookAnFoto/BookAnImg.png";
import Button from '@mui/material/Button';
import { BsPencilSquare } from "react-icons/bs";
import BookAnModal from '../../../components/BookAnModal/BookAnModal';

export default function HomeBookAn() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <section className='home_book_an'>
        <div className="container">
          <h4 className='book_ann_title'><span>B</span>ook an</h4>
          <center>
            <p className="book_an_suptitle">Easily and quickly book a time convenient for you for a haircut</p>
          </center>

          <div className="book_an_wrapper">
            <div className="book_an_content">
              <h5 className='book_an_content_title'><span>Express</span> haircut for busy people</h5>
              <p className="book_an_content_suptitle">Enjoy a professional haircut in a relaxed atmosphere, quickly and efficiently. Book your appointment today and skip the wait!</p>

              <div onClick={handleOpen} className="book_an_btn">
                <Button variant="contained" endIcon={<BsPencilSquare />}>
                  Book an
                </Button>
              </div>

            </div>

            <img className='book_an_img' src={BookAnImg} alt="" />
          </div>
        </div>
      </section>

      <BookAnModal handleClose={handleClose} open={open}/>
    </>

  )
}
