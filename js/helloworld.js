export default () => {
  // I am a hello world function
  console.log("Hello world");

  // Let mobile user verify it
  const messageEl = document.querySelector(".message");
  messageEl instanceof HTMLElement && (messageEl.innerText = "Hello world :D");
};
