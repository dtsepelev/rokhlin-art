.main {
    margin-bottom: 50px;
    display: inline-block;
}

.main_zoomed {
    .img {
    	cursor: zoom-out;
    }
}

.img {
    width: 100%;
    height: auto;
    padding-bottom: 4px;
    pointer-events: none;
}

@media (min-width: $tablet) {
	.img {
		cursor: zoom-in;
		pointer-events: auto;
	}
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
