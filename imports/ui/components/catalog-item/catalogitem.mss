.main {
    margin-bottom: 50px;
}

.imgWrapper:hover {
    display: inline;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    text-shadow: -1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 0px, $grey-base 0px, $grey-base 1px, rgba(0, 0, 0, 0) 1px);
}

@media (-webkit-min-device-pixel-ratio: 1.5),
(min-resolution: 144dpi) {
    .imgWrapper:hover {
        background-image: linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 0px, $grey-base 0px, $grey-base 0.5px, rgba(0, 0, 0, 0) 0.5px);
    }
}

.img {
    width: 100%;
    height: 100%;
    padding-bottom: 4px;
}

.hidden {
    display: none;
}

.visible {
    opacity: 1;
}

@media (min-width: $tablet) {
    .img {
        padding-bottom: 6px;
    }
}

@media (min-width: $desktopmax) {
    .main {
        margin-bottom: 66px;
    }
}
