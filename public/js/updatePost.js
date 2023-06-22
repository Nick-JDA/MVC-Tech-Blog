const updateButtonHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#project-name').value.trim();
  const content = document.querySelector('#project-desc').value.trim();
  const upId = event.target.getAttribute('data-id');
    console.log(upId);
  if (title && content) {
    const response = await fetch(`/api/post/${upId}`, {
      method: 'PUT',
      body: JSON.stringify({ title, content }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert('Failed to create post');
    }
  }
};

document
  .querySelector('#update')
  .addEventListener('click', updateButtonHandler);