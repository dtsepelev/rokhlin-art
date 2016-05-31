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
  position: relative;
  bottom: -1px;

  display: inline-block;

  width: 18px;
  height: 14px;

  background: url(/images/love.svg) no-repeat top center;
  background-size: contain;
  background-size: 15px 14px;
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
