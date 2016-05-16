.main {
    padding-top: 39px;
}

.menu {
    padding-top: 7px;
    display: inline-block;
    float: right;
    color: $grey;
    max-width: 160px;
    text-align: right;
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
        padding-top: 3px;
        max-width: 100%;
    }
    .menuElement {
        padding-left: 56px;
        margin-bottom: 0px;
    }
    .logo {
        margin-left: 0;
        max-width: 100%;
    }
}

@media (min-width: $desktophd) {
    .main {
        padding-top: 63px;
        padding-bottom: 45px;
    }
}
