/* eslint-disable no-unused-vars */

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import Alert from 'bootstrap/js/dist/alert';

// or, specify which plugins you need:
import { Tooltip, Toast, Popover } from 'bootstrap';
// Import our custom CSS
import '../css/styles.scss'

// Create an example popover
document.querySelectorAll('[data-bs-toggle="popover"]')
  .forEach(popover => {
    new Popover(popover)
  })