.main {
  margin-bottom: 50px;
}

.imgWrapper {
  position: relative;

  cursor: pointer;
}

.imgWrapper:hover {
  .img {
    opacity: 0.93;
  }
}

.img {
  width: 100%;
  height: 100%;
}

.hidden {
  display: none;
}

.visible {
  opacity: 1;
}

.title {
  position: absolute;
  bottom: 18px;
  left: 0;

  margin-bottom: 0;
  padding-right: 6px;

  color: $grey;
  background-color: white;
}


@media (min-width: $desktopmax) {
  .main {
    margin-bottom: 66px;
  }
}
