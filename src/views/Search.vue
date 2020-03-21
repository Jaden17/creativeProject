<template>
<div class="wrapper">
  <div class="search">
    <form>
      <input id="compoundInput" placeholder="Enter Compound Name" type="text"></input><br />
      <input id="compoundSubmit" type="submit" value="Search"></input>
    </form>
  </div>
</div>
  <div id="compoundResults"></div>
  <div id='compoundDescription'></div>
</template>

<style scoped>

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 3px solid #000;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

#compoundubmit {
  background-color: rgba(0,0,0,.7);
  color: #FFF;
  display: table-cell;
  padding-left: 10px;
  padding-right: 10px;
  width: 1px;
}

#compoundInput {
  background-color: rgba(0,0,0,.3);
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
