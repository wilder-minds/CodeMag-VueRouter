import { ref, reactive } from "vue";
import axios from "axios";

class State {
  catUrl = ref("");
  cats = reactive([]);
  numberOfCats = ref(5);

  async getCatUrl() {
    const results = await axios.get(`https://aws.random.cat/meow?v=${Math.floor(Math.random() * 10000)}`);
    return results.data.file;
  }

  async getCat() {
    this.catUrl.value = await this.getCatUrl();
  };

  async getCats() {
    this.cats.splice(0, this.cats.length);
    for (let x = 0; x < this.numberOfCats.value; ++x) {
      const result = await this.getCatUrl();
      this.cats.push({ url: result });
    }
  }

}

export default new State();