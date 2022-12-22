<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useDataStore } from "../stores/data";

export default {
  name: "HomePage",
  computed: {
    ...mapWritableState(useDataStore, ["inputText"]),
    ...mapState(useDataStore, ["profilePicture"]),
  },
  methods: {
    ...mapActions(useDataStore, ["generateProfilePicture"]),
  },
};
</script>

<template>
  <div class="container">
    <div class="container-content">
      <div class="div-input">
        <input
          class="input-text"
          type="text"
          v-model="inputText"
          placeholder="Ketik nama Anda..."
        />
      </div>
      <div class="div-button">
        <button @click="generateProfilePicture" class="button">
          Buat Profile Picture!
        </button>
      </div>
      <div class="div-image" v-if="profilePicture.length">
        <img :src="profilePicture" class="generated-image" />
      </div>
    </div>
  </div>
</template>

<style>
.container {
  background-color: yellow;
  max-height: 100vh;
  padding: 10px;
}

.container-content {
  background-color: #b3e5fc;
  min-height: 97.5vh;
}

.div-input {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  padding-top: 200px;
}
.input-text {
  width: 300px;
  padding: 5px;
  border-radius: 5px;
  font-size: larger;
}

.div-button {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
}

.button {
  background-color: #4caf50;
  color: white;
  width: 210px;
  font-size: 20px;
  padding: 10px;
  border-radius: 5px;
  border: 0;
}

.button:hover {
  border: solid #62b665;
}

.div-image {
  display: flex;
  justify-content: center;
}

.generated-image {
  border-radius: 1000px;
  background-color: white;
  border: solid;
  border-color: gray;
  width: 200px;
  height: 200px;
  margin-top: 20px;
}
</style>
