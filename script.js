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
