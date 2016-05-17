.main {
    position: absolute;
    bottom: 0;
    width: 100%;
    /* Set the fixed height of the footer here */
    height: 96px;
}

.wrapper {
    padding-top: 18px;
}

@media (min-width: $tablet) {
    .copyright {
        float: right;
    }
}

@media (min-width: $desktopmax) {
    .main {
        height: 144px;
    }
    .wrapper {
        padding-top: 42px;
    }
}
