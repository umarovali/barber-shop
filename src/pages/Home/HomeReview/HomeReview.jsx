import React from 'react';
import HomeReviewModal from './HomeReviewModal/HomeReviewModal';
import useAddReview from '../../../Store/ReviewStore';
import HomeReviewItem from './HomeReviewItem/HomeReviewItem';

export default function HomeReview() {
    const { reviewAdd } = useAddReview();

    return (
        <section className='home_review'>
            <div className="container">
                <div className="review_text_btn">
                    <div className="review_texts">
                        <h5 className='review_title'><span>R</span>eview</h5>
                        <p className="review_suptitle">To read the opinions of our clients, you can read the reviews here.</p>
                    </div>

                    <HomeReviewModal />
                </div>

                <ul className="review_wrapper">
                    {reviewAdd.map((review, index) => (
                        <HomeReviewItem review={review} key={index} />
                    ))}
                </ul>
            </div>
        </section>
    );
}


