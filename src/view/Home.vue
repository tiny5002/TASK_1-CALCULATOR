<template>
  <div id="app">
    <h1>Vue 2 Calculator</h1>
    <div class="calculator">
      <div class="display">
        <input type="text" v-model="current" readonly />
      </div>

      <div class="button-row">
        <button class="side-button" @click="clear">AC</button>
        <button class="side-button" @click="deleteLast">DEL</button>
        <button class="operation-button" @click="append('/')">/</button>
        <button class="operation-button" @click="append('*')">*</button>
      </div>

      <div class="button-row">
        <button class="digit-button" @click="append('7')">7</button>
        <button class="digit-button" @click="append('8')">8</button>
        <button class="digit-button" @click="append('9')">9</button>
        <button class="operation-button" @click="append('-')">-</button>
      </div>

      <div class="button-row">
        <button class="digit-button" @click="append('4')">4</button>
        <button class="digit-button" @click="append('5')">5</button>
        <button class="digit-button" @click="append('6')">6</button>
        <button class="operation-button" @click="append('+')">+</button>
      </div>

      <div class="button-row">
        <button class="digit-button" @click="append('1')">1</button>
        <button class="digit-button" @click="append('2')">2</button>
        <button class="digit-button" @click="append('3')">3</button>
        <button id="equal" @click="calculate">=</button>
      </div>

      <div class="button-row">
        <button id="zero" class="digit-button" @click="append('0')">0</button>
        <button class="digit-button" @click="append('.')">.</button>
      </div>

      <div class="history">
        <h2 id="historyTitle">History</h2>
        <div id="historyContent">
        <ul>
          <li v-for="(item, index) in history" :key="index">{{ item }}                  <button class="delete-history" @click="deleteHistory(index)">Delete</button></li>

        </ul>
       </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      current: '',
      history: [] //store calculation history
    };
  },
  methods: {
    append(value) {
      const operators = ['+', '-', '*', '/'];
      const lastChar = this.current.slice(-1);
      if (operators.includes(value) && (this.current === '' || operators.includes(lastChar))) {
        return;
      }
      this.current += value;
    },
    clear() {
      this.current = '';
    },
    deleteLast() {
      this.current = this.current.slice(0, -1);
    },

    calculate() {
      try {
        if (/^[0-9+\-*/.() ]+$/.test(this.current)) {
          const result = new Function(`return ${this.current}`)();
          this.history.push(`${this.current} = ${result}`); //Add 
          this.current = result.toString();
        } else {
          this.current = 'Error';
        }
      } catch (e) {
        this.current = 'Error';
      }
    },
    deleteHistory(index) {
      this.history.splice(index, 1);
    }
  }
};
</script>

<style scoped>
#app {
  text-align: center;
  margin-top: 50px;
  font-family: Arial, sans-serif;
}

body {
  height: 100vh;
  background-color: #dadff7;
  margin: 0;
  font-family: "Roboto Mono", monospace;
}

.calculator {
  width: 400px;
  background-color: #071013;
  padding: 30px 20px;
  margin: auto;
  margin-top: 50px;
  border-radius: 8px;
  box-shadow: 0 20px 50px rgba(0, 5, 24, 0.4);
}

.display input {
  width: 100%;
  padding: 15px 10px;
  font-size: 35px;
  background-color: transparent;
  color: white;
  border: none;
  text-align: right;
  margin-bottom: 20px;
}

.button-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}

button {
  flex: 1;
  margin: 3px;
  font-size: 20px;
  padding: 15px;
  border: none;
  border-radius: 10px;
  color: white;
  cursor: pointer;
}

.digit-button {
  background-color: #6c6a6a;
}

.digit-button:hover {
  background-color: #6c6a6aa8;
}

.operation-button {
  background-color: #f69906;
}

.operation-button:hover {
  background-color: #f69906a8;
}

#equal {
  background-color: #f9544c;
  flex: 1;
}

#equal:hover {
  background-color: #f9544ca8;
}

#zero {
  flex: 2;
}

.side-button {
  background-color: #333;
}

.side-button:hover {
  background-color: #333333a8;
}

.history {
    grid-column: span 4;
    align-items: right;
}

#historyTitle {
    color: aliceblue;
    text-align: center;
}

#historyContent{
  color: white;
  align: left;
}

.delete-history{
  background-color: red;
  color: white;
  margin-left: 5rem;
  font-size: 16px;
}
</style>