<template>
  <div id="app">
    <h1>About Page</h1>
    <div class="about">
      <h1>What is a calculator?</h1>
      <p>
        A calculator is a device that performs arithmetic operations on numbers.
        Basic calculators can do only addition, subtraction, multiplication and division mathematical calculations.
      </p>

      <p>
        However, more sophisticated calculators can handle exponential operations, square roots, logarithms,
        trigonometric functions and hyperbolic functions. Internally, some calculators perform all these functions
        by repeated addition processes.
      </p>

      <h2>The evolution of the calculator</h2>
      <p>
        Most calculators these days require electricity to operate or are battery-powered calculators. Calculators work
        by performing programmed functions based on numerical inputs.
      </p>

      <p>
        Before the electronic calculator (circa 1970), a more primitive calculator, the slide rule, was commonly used.
        It consisted of a slat of wood called the slide that could be moved in and out of a reinforced pair of slats.
        Both the slide and the outer pair of slats had calibrated numerical scales.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
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
.about {
  text-align: left;
  max-width: 800px;
  margin: 40px auto;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f5f7fa;
  padding: 20px;
  border-radius: 8px;
}
</style>