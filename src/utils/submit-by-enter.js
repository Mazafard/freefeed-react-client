import { KEY_RETURN } from 'keycode-js';

/**
 * Returns the keydown handler that handles submit by Enter in text fields.
 *
 * The Enter press acts as submit unless the Shift key is pressed or the text
 * cursor is at the end of text and the text ends with space. The space+Enter
 * pattern allows mobile users (that cannot use Shift) to insert soft returns to
 * text.
 *
 * @param {Function} submitFn submit action function
 */
export function submitByEnter(submitFn) {
  return function (event) {
    if (event.keyCode !== KEY_RETURN || event.shiftKey) {
      return;
    }

    const { target } = event;
    if (target.selectionStart === target.value.length && / $/.test(target.value)) {
      // Trim the extra spaces before new line
      target.value = target.value.replace(/ +$/, '');
      return;
    }

    event.preventDefault();
    submitFn(event);
  };
}
