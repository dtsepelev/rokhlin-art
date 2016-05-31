.main {
  padding-top: 39px;
}

.menu {
  display: inline-block;
  float: right;

  max-width: 100px;
  padding-top: 7px;
  padding-left: 0;

  text-align: right;

  color: $grey;
}

.menuElement {
  display: inline-block;

  margin-bottom: 18px;
}

.logo {
  display: inline-block;

  max-width: 160px;
}

@media (min-width: $tablet) {
  .main {
    padding-bottom: 21px;
  }
  .menu {
    max-width: 100%;
    padding-top: 3px;
  }
  .menuElement {
    margin-bottom: 0;
    padding-left: 56px;
  }
  .logo {
    max-width: 100%;
    margin-left: 0;
  }
}

@media (min-width: $desktopmax) {
  .main {
    padding-top: 63px;
    padding-bottom: 45px;
  }
}
