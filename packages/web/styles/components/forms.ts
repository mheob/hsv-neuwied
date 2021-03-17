import { css } from 'styled-components';

export const formStyles = css`
  /* Checkbox */
  [type='checkbox'] {
    + span {
      position: relative;
      display: inline-block;
      width: calc(100% - 2rem);
      height: 25px;
      padding-left: 35px;
      font-size: 1rem;
      line-height: 25px;
      cursor: pointer;
      user-select: none;
    }

    + span:before,
    &:not(.filled-in) + span:after {
      position: absolute;
      top: 0;
      left: 0;
      z-index: 0;
      width: 18px;
      height: 18px;
      margin-top: 3px;
      border: 2px solid ${theme.colors.gray.dark};
      border-radius: 1px;
      transition: 0.2s;
      content: '';
    }

    &:disabled + span:before {
      border-right: 2px solid ${theme.colors.form.input.disabled};
      border-bottom: 2px solid ${theme.colors.form.input.disabled};
    }

    &:not(.filled-in) + span:after {
      border: 0;
      transform: scale(0);
    }

    &:checked {
      + span:before {
        top: -4px;
        left: -5px;
        width: 12px;
        height: 22px;
        border-top: 2px solid transparent;
        border-right: 2px solid ${theme.colors.form.input.focus};
        border-bottom: 2px solid ${theme.colors.form.input.focus};
        border-left: 2px solid transparent;
        transform: rotate(40deg);
        transform-origin: 100% 100%;
        backface-visibility: hidden;
      }
    }

    &:not(:checked):disabled + span:before {
      background-color: ${theme.colors.form.input.disabled};
      border: none;
    }

    &.tabbed:focus + span:after {
      background-color: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 50%;
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0.1);
      transform: scale(1);
    }

    &:not(:checked),
    &:checked {
      position: absolute;
      opacity: 0;
      pointer-events: none;
    }
  }

  /* Textarea */
  textarea {
    width: 100%;
    height: 4rem;
    background-color: transparent;

    &.materialize-textarea {
      box-sizing: border-box;
      width: 100%;
      padding: 0.8rem 0 0.8rem 0; /* prevents text jump on Enter keypress */
      overflow-y: hidden; /* prevents scroll bar flash */
      line-height: normal;
      background-color: transparent;
      border: none;
      border-radius: 0;
      outline: none;
      box-shadow: none;
      transition: box-shadow 0.3s, border 0.3s;
      resize: none;

      /* Disabled input style */
      &:disabled,
      &[readonly='readonly'] {
        color: ${theme.colors.form.input.disabled};
      }

      /* Disabled label style */
      &:disabled + label,
      &[readonly='readonly'] + label {
        color: ${theme.colors.form.input.disabled};
      }

      /* Focused input style */
      &:focus:not([readonly]) {
        border-bottom: 1px solid ${theme.colors.form.input.focus};
        box-shadow: 0 1px 0 0 ${theme.colors.form.input.focus};
      }

      /* Focused label style */
      &:focus:not([readonly]) + label {
        color: ${theme.colors.form.input.focus};
      }

      /* Form Message Shared Styles */
      & + label:after {
        position: absolute;
        top: 100%;
        left: 0;
        display: block;
        opacity: 0;
        transition: 0.2s opacity ease-out, 0.2s color ease-out;
        content: '';
      }
    }
  }

  /* For textarea auto resize */
  .hiddendiv {
    position: absolute;
    top: 0;
    z-index: -1;
    padding-top: 1.2rem; /* prevents text jump on Enter keypress */
    white-space: pre-wrap;
    word-wrap: break-word;
    overflow-wrap: break-word; /* future version of deprecated 'word-wrap' */
    visibility: hidden;
  }

  /* Change Chrome Autofill BG-Color */
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  textarea:-webkit-autofill,
  textarea:-webkit-autofill:hover,
  textarea:-webkit-autofill:focus,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06) #fff inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  /* Hide spinner in Firefox */
  input[type='number'] {
    appearance: textfield;

    /* Position the spinner to the left */
    &::-webkit-textfield-decoration-container {
      flex-direction: row-reverse;
    }

    /* ".hide-spinner" class to hide spinner */
    &.hide-spinner::-webkit-outer-spin-button,
    &.hide-spinner::-webkit-inner-spin-button {
      margin: 0;
      appearance: none;
    }
  }
`;
