.main {
	cursor: pointer;
	margin-bottom: 50px;
}

.img {
	width: 100%;
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

@media (min-width: $desktophd) {
	.main {
		margin-bottom: 66px;
	}
}