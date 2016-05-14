.menu {
    padding-top: 46px;
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
    padding-top: 39px;
    display: inline-block;
    max-width: 160px;
}

@media (min-width: $tablet) {
    .menu {
        padding-top: 42px;
        max-width: 100%;
    }
    .menuElement {
        padding-left: 56px;
    }
    .logo {
        margin-left: 0;
        max-width: 100%;
    }
}