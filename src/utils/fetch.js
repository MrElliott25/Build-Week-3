//TOKEN DI STEFANO
const token =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTljMzViMzBiYzFkZTAwMTU3N2I3YjIiLCJpYXQiOjE3NzE4NDUwNDMsImV4cCI6MTc3MzA1NDY0M30.xDkQhPF99LMH1QQLGZm1CfXdTXEBdv9eNrDMotGM09c";

//Funzione che mi serve per recuperare le experience da generare dinamicamente
export const fetchExperiences = async (experiencesAPI) => {
  try {
    const res = await fetch(experiencesAPI, {
      headers: {
        Authorization: token,
      },
    });

    if (!res.ok) throw new Error("Errore nella pesca delle experiences");

    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Errore! -> " + err);
    return [];
  }
};

//Funzione che fa la POST o la PUT per le experience
export const generateExperience = async (newExperience, experiencesAPI, method) => {
  fetch(experiencesAPI, {
    method: method,
    headers: {
      Authorization: token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newExperience),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Errore durante il salvataggio dell'esperienza");
      }
    })
    .then((data) => {
      console.log("Esperienza salvata!", data);
      alert("Fatto!");
    })
    .catch((err) => {
      alert("Errore! -> ", err);
    });
};

//Funzione per fare la DELETE di una specifica experience

export const deleteExperience = async (experiencesAPI) => {
  fetch(experiencesAPI, {
    method: "DELETE",
    headers: {
      Authorization: token,
    },
  })
    .then((res) => {
      if (res.ok) alert("Esperienza eliminata con successo!");
      else throw new Error("Errore durante l'eliminazione della task.");
    })
    .catch((err) => {
      console.log("Errore! -> " + err);
    });
};

// funzione che mi serve per recuperare i dati per la WorkPage

export const workPageFetch = async (workAPI) => {
  try {
    const response = await fetch(workAPI, {
      headers: {
        Authorization: token,
      },
    });
    if (!response.ok) throw new Error("Errore nella pesca dei lavori");
    const dato = await response.json();
    return dato;
  } catch (err) {
    console.error("Errore! -> " + err);
    return [];
  }
};

// ----------------------------- FETCH DEI COMMENTI -----------------------------------

const commentAPItoken =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2OTczM2Y4Njg1ZTNiMTAwMTViNWVkOTkiLCJpYXQiOjE3NzIxMDUxNDYsImV4cCI6MTc3MzMxNDc0Nn0.JTAxQkYGcICpVSI4mkoBkqxV_S5SFdhAGU_QZ39fDic";

const commentAPI = "https://striveschool-api.herokuapp.com/api/comments/";

export const fetchComments = async () => {
  try {
    const res = await fetch(commentAPI, {
      headers: {
        Authorization: commentAPItoken,
      },
    });
    if (!res.ok) throw new Error("Errore nella pesca dei commenti!");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Errore! -> " + err);
    return [];
  }
};

export const generateComment = async (method, post) => {
  try {
    const res = await fetch(commentAPI, {
      method: method,
      headers: {
        Authorization: commentAPItoken,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(post),
    });

    if (!res.ok) throw new Error("Errore nel salvataggio del commento.");
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Errore! -> " + err);
  }
};

export const deleteComment = async (postId) => {
  try {
    const res = await fetch(commentAPI + postId, {
      method: "DELETE",
      headers: {
        Authorization: commentAPItoken,
      },
    });
    if (!res.ok) throw new Error("Errore nell'eliminazione del commento");
    const data = await res.json();
    return data;
  } catch (err) {
    console.error("Errore! -> " + err);
  }
};
