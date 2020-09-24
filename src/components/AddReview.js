import React, { useState } from 'react';

const AddReview = (props) => {
  const [headline, setHeadline] = useState('');
  const [content, setContent] = useState('');

  const clickHandler = () => {
    const headline = document.getElementsByClassName('add-headline')[0].value;
    const content = document.getElementsByClassName('add-content')[0].value;
    props.handleClick(headline, content);
    setHeadline('');
    setContent('');
  };

  return (
    <div className="add-review">
      <div className="add-review-text">Write your review here</div>
      <input
        value={headline}
        type="text"
        placeholder="Add your title here"
        className="add-headline"
        onChange={(event) => {
          setHeadline(event.target.value);
        }}
      />
      <input
        value={content}
        type="text"
        placeholder="Add your content here"
        className="add-content"
        onChange={(event) => {
          setContent(event.target.value);
        }}
      />
      <button className="submit-button" onClick={clickHandler}>
        Submit
      </button>
    </div>
  );
};

export default AddReview;
