export const createCommentsSectionTemplate = (filmCard) => {
  const {comments} = filmCard;
  const commentsNumber = comments.length;
  return `<div class="film-details__bottom-container">
    <section class="film-details__comments-wrap">
       <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${commentsNumber}</span></h3>

       <ul class="film-details__comments-list">

       </ul>

       <div class="film-details__new-comment">

       </div>
    </section>
  </div>
`;
};

