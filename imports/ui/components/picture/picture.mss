.main {
    cursor: zoom-in;
    margin-bottom: 50px;
    display: inline-block;
}

.main_zoomed {
    cursor: zoom-out;
}

.img {
    width: 100%;
    padding-bottom: 4px;
}

@media (min-width: $desktophd) {
    .img {
        padding-bottom: 6px;
    }
}

@media (min-width: $desktopmax) {
    .main {
        margin-bottom: 66px;
    }
}

.hidden {
    opacity: 0;
    cursor: default;
    pointer-events: none;
}

.visible {
    opacity: 1;
}
