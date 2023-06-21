const addCommentFunction = async (event) => {
  event.preventDefault();

  const comment = document.querySelector('#comment-text').value.trim();
  const post_id = parseInt(document.location.href.split('/')[4]);
  console.log(document.location.href.split('/'));
  if (comment) {
    const response = await fetch(`/api/comment`, {
      method: 'POST',
      body: JSON.stringify({ comment, post_id }),
      headers: { 'Content-Type': 'application/json' },
    });
    console.log(response);
    if (response.ok) {
      document.location.reload();
    } else {
      alert('Failed to add comment');
    }
  }
  console.log(comment);
  
};

document
  .querySelector('#add-comment')
  .addEventListener('submit', addCommentFunction);
