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

.loveIcon {
	display: inline-block;
	background: url(/images/love.svg) no-repeat top center;
	background-size: contain;
	width: 18px;
	height: 14px;
	background-size: 15px 14px;
	position: relative;
	bottom: -1px;
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
