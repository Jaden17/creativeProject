<template>
<div id="app">
  <img src="../images/chem.jpg" id="backgroundimg">
  <div id="menu">
    <div id="brand">
      <router-link to="/">
        <h1>Lotusville</h1>
      </router-link>
    </div>
    <div id="side">
      <router-link to="/search">
        <div class="menu-item search" id="search">
          <img src="../images/info.png" id="infoimg" class="linked">
          <p class="searchText" id="info">Find SDS Info</p>
        </div>
      </router-link>
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="../images/search.png" id="browseimg" class ="linked">
          <p class="searchText" id="browse">Search Stockroom</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item" id="cart">
          <img src="../images/requestForm.png" id="requestimg" class ="linked">
          <p class="searchText" id="request">Request Form</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div id="footer">
    <a class='gitLink' href="https://github.com/Jaden17/creativeProject">https://github.com/Jaden17/creativeProject |</a>
  </div>
</div>
</template>

<style scoped>
  #footer {
    position: fixed;
    bottom: 0px;
    height: 25px;
    background-color: #3b444c;
    right: 0px;
    left: 0px;
    text-align: right;
    }
  * {
    z-index: 50;
  }

  .linked {
    width: 25px;
  }

  #backgroundimg {
  z-index: -2;
  position: fixed;
  top: 25px;
  width: 100%;
  min-width: 700px;
  }

  #menu {
    position: fixed;
    top:0px;
    width: 100%;
    background-color: #3b444c;
    height: 65px;
  }

  #brand {
    position: relative;
    left: 10px;
    top: -10px;
  }

  h1 {
  color: #FFFFFF;
  }

  #side {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  position: relative;
  top: -60px;
  }

  .menu-item {
    margin-left: 15px;
    margin-right: 15px;
    width: 30px;
  }

  .searchText {
    color: #FFFFFF;
    width: 150px;
    position: relative;
    top: -20px;
    right: 60px;
    opacity: 0;
  }

  #infoimg:hover + #info {
    opacity: 1;
  }

  #browseimg:hover + #browse {
    opacity: 1;
  }

  #requestimg:hover + #request {
    opacity: 1;
  }
</style>
