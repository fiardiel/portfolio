export const scrollToTop = () => {
  const urlWithoutHash = window.location.href.split('#')[0];
  window.history.replaceState(null, '', urlWithoutHash);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

export const scrollToElementById = (id: string) => {
  const urlWithoutHash = window.location.href.split('#')[0];
  window.history.replaceState(null, '', urlWithoutHash);
  const element = document.getElementById(id);
  if (element) {
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - 20;
    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
  }
}