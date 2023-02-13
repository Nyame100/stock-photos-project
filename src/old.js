useEffect(() => {
  const event = window.addEventListener("scroll", () => {
    if (
      !loading &&
      window.innerHeight + window.scrollY >= document.body.scrollHeight
    ) {
      setPage((currentPage) => {
        return currentPage + 1;
      });
    }
    // console.log(`innerHeight ${window.innerHeight}`);
    // console.log(`scrollY ${window.scrollY}`);
    // console.log(`body height ${document.body.scrollHeight}`);
  });
  return () => window.removeEventListener("scroll", event);
  // eslint-disable-next-line
}, []);
