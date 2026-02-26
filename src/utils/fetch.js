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
export const generateExperience = async (
  newExperience,
  experiencesAPI,
  method,
) => {
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
