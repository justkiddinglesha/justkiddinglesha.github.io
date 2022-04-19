const languages = () => {
  const languagesMenu = document.querySelector('.languages');

  if (!languagesMenu) return false;

  const toogleLanguages = () => {
    languagesMenu.classList.toggle('active');
  };

  languagesMenu.addEventListener('click', toogleLanguages);

  document.addEventListener('click', (e) => {
    const { target } = e;
    const itsLanguages = target === languagesMenu || languagesMenu.contains(target);
    const languagesActive = languagesMenu.classList.contains('active');

    if (!itsLanguages && languagesActive) {
      toogleLanguages();
    }
  });
};

export default languages;
