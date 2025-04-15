import React from 'react';

export default function HomeReviewItem({ review }) {
    return (
        <li className='home_review_item'>
            <div className="review_item_avatar_img">
                {review.avatar && <img className='review_avatar' src={review.avatar} alt="Avatar" />}
                <h4 className="review_title_item">{review.name}</h4>
            </div>
            <p className="review_suptitle_item">{review.content}</p>
        </li>
    );
}
