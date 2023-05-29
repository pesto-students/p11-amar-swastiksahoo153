function displayWindowProperties() {
  console.log({ userAgent: navigator.userAgent });
  console.log({ "scrren width": screen.width, "screen height": screen.height });
  console.log({ href: location.href, pathname: location.pathname });

  sessionStorage.setItem("key", "value");
  console.log({
    "session storage: ": sessionStorage.getItem("key1"),
    "local storage: ": localStorage.getItem("key2"),
  });
}
