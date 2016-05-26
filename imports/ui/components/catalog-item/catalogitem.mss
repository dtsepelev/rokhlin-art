.main {
	margin-bottom: 50px;
}


.imgWrapper:hover {
	cursor: pointer;
	span {
		border-bottom: 1px solid $grey-base;
	}
}

.img {
	width: 100%;
	height: 100%;
	padding-bottom: 4px;
}

.hidden {
	opacity: 0;
	cursor: default;
	pointer-events: none;
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