.main {
  padding-bottom: 139px;
}

.main:after {
  display: inline-block;
  overflow: hidden;

  width: 0;

  content: '\2026'; /* ascii code for the ellipsis character */
  animation: ellipsis steps(4,end) 1200ms infinite;
  vertical-align: bottom;
}

@keyframes ellipsis {
  to {
    width: 20px;
  }
}
