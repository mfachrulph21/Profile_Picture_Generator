import { defineStore } from "pinia";

export const useDataStore = defineStore("data", {
  state: () => {
    return {
      profilePicture: "",
      inputText: "",
    };
  },
  actions: {
    async generateProfilePicture() {
      try {
        this.profilePicture = `https://robohash.org/${this.inputText}.png`;

      } catch (error) {
        console.log(error);
      }
    },
  },
});
