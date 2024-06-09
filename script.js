const toggleButtons = [
  document.querySelector('#toggleButton1'),
  document.querySelector('#toggleButton2'),
];

const popovers = [
  document.querySelector('#popover1'),
  document.querySelector('#popover2'),
];

const supportsPopover = () => {
  return HTMLElement.prototype.hasOwnProperty('popover');
};

const popoverSupported = supportsPopover();

const configurePopovers = () => {
  if (popoverSupported) {
    popovers.forEach((popover, i) => {
      popover.popover = 'auto';
      toggleButtons[i].popoverTargetElement = popover;
      toggleButtons[i].addEventListener = 'toggle';
    });
  } else {
    toggleButtons.forEach((button) => (button.innerHTML = 'Not Supported'));
    popovers.forEach((button) => (button.style.display = 'none'));
  }
};

configurePopovers();
