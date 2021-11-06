<template>
  <div id="app">
    <div class="header">
      <h1>Class Notes</h1>
      <div id="nav">
        <router-link to="/">Add</router-link> |
        <router-link to="/about">Notes</router-link> |
        <router-link to="/classes">Classes</router-link>
      </div>
    </div>
    <div class="content">
      <router-view />
    </div>
    <div class="foot">
      <div class="footer">
        <footer>
          <p><a href="https://github.com/bfarley822/CP3.git" class="link">Github Link</a></p>
        </footer>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  background-color: #D8BFD8;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #571845;
  padding: 0px 100px;
  color: white;
}

.header h1 {
  padding-top: 20px;
}

.footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #571845;
  text-align: center;
  padding: 10px;

}

.foot {
  margin-top: 40px;
}

.footer a:hover {
  color: yellow;
}

.link {
  text-decoration: none;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #FFC300;
}
li {
  list-style-type: none;
}
</style>
