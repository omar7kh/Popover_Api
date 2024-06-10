import {
  computePosition,
  flip,
  shift,
  offset,
} from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.5/+esm';

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
      toggleButtons[i].popoverTargetElement = popover;
      toggleButtons[i].addEventListener = 'toggle';
    });
  } else {
    toggleButtons.forEach((button) => (button.innerHTML = 'Not Supported'));
    popovers.forEach((button) => (button.style.display = 'none'));
  }
};

const handlePopoverPosition = (toggleButton, popover) => {
  computePosition(toggleButton, popover, {
    placement: popover.id === 'popover1' ? 'bottom-end' : 'bottom-start',
    middleware: [offset(3), flip(), shift()],
  }).then(({ x, y }) => {
    Object.assign(popover.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
  });
};

const popoverPositionEvents = () => {
  popovers.forEach((popover, index) => {
    popover.addEventListener('toggle', (event) => {
      if (event.newState === 'open') {
        handlePopoverPosition(toggleButtons[index], popover);
      }
    });
  });

  window.addEventListener('resize', () => {
    popovers.forEach((popover, index) =>
      handlePopoverPosition(toggleButtons[index], popover)
    );
  });
};

configurePopovers();
popoverPositionEvents();
