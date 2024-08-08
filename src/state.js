import { writable, get } from "svelte/store";

const localState = localStorage.getItem("state");
const initialState = {
  students: [
    {
      id: "63468059c85a96bfad59d1c4",
      name: "Francisca Raymond",
      phone: "+1 (992) 412-2727",
      email: "franciscaraymond@datagene.com",
      score: 1559,
      age: 16,
      registered: "2020-09-24T02:43:36 -02:00",
      isActive: true,
      note: "Pariatur consequat sit duis id qui. Elit deserunt duis ea dolor deserunt consequat mollit tempor. Dolore do sit reprehenderit laboris et sunt magna ipsum sit.\r\n",
    },
  ],
};

if (!localState) {
  localStorage.setItem("state", JSON.stringify(initialState));
}

const appState = localState ? JSON.parse(localState) : initialState;

export const state = writable(appState);
export const update = (callback) => {
  const updatedState = callback(get(state));

  state.update(() => updatedState);
  localStorage.setItem("state", JSON.stringify(updatedState));
};
