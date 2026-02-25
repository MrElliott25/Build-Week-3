const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMzViMzBiYzFkZTAwMTU3N2I3YjIiLCJpYXQiOjE3NzE4NDUwNDMsImV4cCI6MTc3MzA1NDY0M30.xDkQhPF99LMH1QQLGZm1CfXdTXEBdv9eNrDMotGM09c";

//   GET
export const fetchPosts = function (postsAPI) {
  return fetch(postsAPI, {
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore recupero post");
      }
    })
    .catch((err) => {
      console.error(err);
      return [];
    });
};

// POST
export const createPost = function (postsAPI, newPost) {
  return fetch(postsAPI, {
    method: "POST",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newPost),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore nella creazione del post");
    }
  });
};

// PUT

export const modifyPost = function (postsAPI, postId, updatedData) {
  return fetch(`${postsAPI}/${postId}`, {
    method: "PUT",
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Errore nella modicia del post");
    }
  });
};

// DELETE

export const deletePost = function (postsAPI, postId) {
  return fetch(`${postsAPI}/${postId}`, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  }).then((res) => {
    if (res.ok) {
      return true;
    } else {
      throw new Error("Errore nella rimozione del post");
    }
  });
};
