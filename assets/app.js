import './bootstrap.js';
/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */
import './styles/app.scss';

// Dropdown
import { Dropdown } from "bootstrap";
const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
const _ = [...dropdownElementList].map(dropdownToggleEl => new Dropdown(dropdownToggleEl))
