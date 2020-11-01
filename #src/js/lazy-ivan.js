class MediaLazyLoad {
  constructor() {
    this.observer = null;

    this.observe = this.observe.bind(this);

    document.addEventListener("DOMContentLoaded", () =>
      document.querySelectorAll("[data-lazy]").forEach(this.observe)
    );
  }

  observe(node) {
    const observer = new IntersectionObserver(entries =>
      entries.forEach(({ isIntersecting, target }) => {
        if (isIntersecting && target.isEqualNode(node)) {
          const { loaderClass, src, srcWebm, srcMp4 } = target.dataset;

          if (loaderClass) {
            node.classList.add(loaderClass);
          }

          if (src) {
            const onLoadHandler = ev => {
              ev.target.classList.remove(loaderClass);

              ev.target.removeEventListener("load", onLoadHandler);
            };

            target.addEventListener("load", onLoadHandler);

            target.src = target.dataset.src;
          }
          if (srcWebm) {
            this.appendSource(target, "webm", srcWebm, loaderClass);
          }
          if (srcMp4) {
            this.appendSource(target, "mp4", srcMp4, loaderClass);
          }

          observer.unobserve(target);
        }
      })
    );

    observer.observe(node);
  }

  handleImageLoader(node, className) {
    if (className) {
      const onLoadHandler = () => {
        node.classList.remove(className);

        node.removeEventListener("load", onLoadHandler);
      };
    }
  }

  appendSource(node, type, src, loaderClass) {
    const source = document.createElement("source");

    source.type = `video/${type}`;
    source.src = src;

    if (loaderClass) {
      const onLoad = node.addEventListener("loadeddata", ev => {
        if (ev.target.readyState >= 3) {
          if (node) {
            node.classList.remove(loaderClass);
          }

          source.removeEventListener("loadeddata", onLoad);
        }
      });
    }

    node.appendChild(source);
  }
}

new MediaLazyLoad();
