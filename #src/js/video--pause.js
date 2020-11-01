const closeModal = () => {
  document.querySelectorAll('video').forEach(node => node.pause());
};