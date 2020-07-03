function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React, { useState, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';
import { AsYouType, getCountryCallingCode, parseDigits } from 'libphonenumber-js/core';
import InputSmart from './InputSmart';
import InputBasic from './InputBasic';
export function createInput(defaultMetadata) {
  function PhoneInput(_ref, ref) {
    var country = _ref.country,
        defaultCountry = _ref.defaultCountry,
        useNationalFormatForDefaultCountryValue = _ref.useNationalFormatForDefaultCountryValue,
        value = _ref.value,
        onChange = _ref.onChange,
        metadata = _ref.metadata,
        smartCaret = _ref.smartCaret,
        international = _ref.international,
        rest = _objectWithoutProperties(_ref, ["country", "defaultCountry", "useNationalFormatForDefaultCountryValue", "value", "onChange", "metadata", "smartCaret", "international"]);

    var getInitialParsedInput = function getInitialParsedInput() {
      return getParsedInputForValue(value, country, international, defaultCountry, useNationalFormatForDefaultCountryValue, metadata);
    }; // This is only used to detect `country` property change.


    var _useState = useState(country),
        _useState2 = _slicedToArray(_useState, 2),
        prevCountry = _useState2[0],
        setPrevCountry = _useState2[1]; // This is only used to detect `defaultCountry` property change.


    var _useState3 = useState(defaultCountry),
        _useState4 = _slicedToArray(_useState3, 2),
        prevDefaultCountry = _useState4[0],
        setPrevDefaultCountry = _useState4[1]; // `parsedInput` is the `value` passed to the `<input/>`.


    var _useState5 = useState(getInitialParsedInput()),
        _useState6 = _slicedToArray(_useState5, 2),
        parsedInput = _useState6[0],
        setParsedInput = _useState6[1]; // This is only used to detect `value` property changes.


    var _useState7 = useState(value),
        _useState8 = _slicedToArray(_useState7, 2),
        valueForParsedInput = _useState8[0],
        setValueForParsedInput = _useState8[1]; // If `value` property has been changed externally
    // then re-initialize the component.


    useEffect(function () {
      if (value !== valueForParsedInput) {
        setValueForParsedInput(value);
        setParsedInput(getInitialParsedInput());
      }
    }, [value]); // If the `country` has been changed then re-initialize the component.

    useEffect(function () {
      if (country !== prevCountry) {
        setPrevCountry(country);
        setParsedInput(getInitialParsedInput());
      }
    }, [country]); // If the `defaultCountry` has been changed then re-initialize the component.

    useEffect(function () {
      if (defaultCountry !== prevDefaultCountry) {
        setPrevDefaultCountry(defaultCountry);
        setParsedInput(getInitialParsedInput());
      }
    }, [defaultCountry]); // Update the `value` after `valueForParsedInput` has been updated.

    useEffect(function () {
      if (valueForParsedInput !== value) {
        onChange(valueForParsedInput);
      }
    }, [valueForParsedInput]);
    var onParsedInputChange = useCallback(function (parsedInput) {
      var value;

      if (country) {
        // Won't allow `+` in the beginning
        // when a `country` has been specified.
        if (parsedInput && parsedInput[0] === '+') {
          parsedInput = parsedInput.slice(1);
        }
      } else if (!defaultCountry) {
        // Force a `+` in the beginning of a `value`
        // when no `country` and `defaultCountry` have been specified.
        if (parsedInput && parsedInput[0] !== '+') {
          parsedInput = '+' + parsedInput;
        }
      } // Convert `parsedInput` to `value`.


      if (parsedInput) {
        var asYouType = new AsYouType(country || defaultCountry, metadata);
        asYouType.input(country && international ? "+".concat(getCountryCallingCode(country, metadata)).concat(parsedInput) : parsedInput);
        var phoneNumber = asYouType.getNumber(); // If it's a "possible" incomplete phone number.

        if (phoneNumber) {
          value = phoneNumber.number;
        }
      }

      setParsedInput(parsedInput);
      setValueForParsedInput(value);
    }, [country, international, defaultCountry, metadata, setParsedInput, setValueForParsedInput]);
    var InputComponent = smartCaret ? InputSmart : InputBasic;
    return React.createElement(InputComponent, _extends({}, rest, {
      ref: ref,
      metadata: metadata,
      international: international,
      country: country || defaultCountry,
      value: parsedInput,
      onChange: onParsedInputChange
    }));
  }

  PhoneInput = React.forwardRef(PhoneInput);
  PhoneInput.propTypes = {
    /**
     * HTML `<input/>` `type` attribute.
     */
    type: PropTypes.string,

    /**
     * HTML `<input/>` `autocomplete` attribute.
     */
    autoComplete: PropTypes.string,

    /**
     * The phone number (in E.164 format).
     * Examples: `undefined`, `"+12"`, `"+12133734253"`.
     */
    value: PropTypes.string,

    /**
     * Updates the `value`.
     */
    onChange: PropTypes.func.isRequired,

    /**
     * A two-letter country code for formatting `value`
     * as a national phone number (example: `(213) 373-4253`),
     * or as an international phone number without "country calling code"
     * if `international` property is passed (example: `213 373 4253`).
     * Example: "US".
     * If no `country` is passed then `value`
     * is formatted as an international phone number.
     * (example: `+1 213 373 4253`)
     */
    country: PropTypes.string,

    /**
     * A two-letter country code for formatting `value`
     * when a user inputs a national phone number (example: `(213) 373-4253`).
     * The user can still input a phone number in international format.
     * Example: "US".
     * `country` and `defaultCountry` properties are mutually exclusive.
     */
    defaultCountry: PropTypes.string,

    /**
     * If `country` property is passed along with `international={true}` property
     * then the phone number will be input in "international" format for that `country`
     * (without "country calling code").
     * For example, if `country="US"` property is passed to "without country select" input
     * then the phone number will be input in the "national" format for `US` (`(213) 373-4253`).
     * But if both `country="US"` and `international={true}` properties are passed then
     * the phone number will be input in the "international" format for `US` (`213 373 4253`)
     * (without "country calling code" `+1`).
     */
    international: PropTypes.bool,

    /**
     * The `<input/>` component.
     */
    inputComponent: PropTypes.elementType,

    /**
     * By default, the caret position is being "intelligently" managed
     * while a user inputs a phone number.
     * This "smart" caret behavior can be turned off
     * by passing `smartCaret={false}` property.
     * This is just an "escape hatch" for any possible caret position issues.
     */
    // Is `true` by default.
    smartCaret: PropTypes.bool.isRequired,

    /**
     * When `defaultCountry` is defined and the initial `value` corresponds to `defaultCountry`,
     * then the `value` will be formatted as a national phone number by default.
     * To format the initial `value` of `defaultCountry` as an international number instead
     * set `useNationalFormatForDefaultCountryValue` property to `true`.
     */
    useNationalFormatForDefaultCountryValue: PropTypes.bool.isRequired,

    /**
     * `libphonenumber-js` metadata.
     */
    metadata: PropTypes.object.isRequired
  };
  PhoneInput.defaultProps = {
    /**
     * HTML `<input/>` `type="tel"`.
     */
    type: 'tel',

    /**
     * Remember (and autofill) the value as a phone number.
     */
    autoComplete: 'tel',

    /**
     * Set to `false` to use "basic" caret instead of the "smart" one.
     */
    smartCaret: true,

    /**
     * Set to `true` to force international phone number format
     * (without "country calling code") when `country` is specified.
     */
    // international: false,

    /**
     * Prefer national format when formatting E.164 phone number `value`
     * corresponding to `defaultCountry`.
     */
    useNationalFormatForDefaultCountryValue: true,

    /**
     * `libphonenumber-js` metadata.
     */
    metadata: defaultMetadata
  };
  return PhoneInput;
}
export default createInput();
/**
 * Returns phone number input field value for a E.164 phone number `value`.
 * @param  {string} [value]
 * @param  {string} [country]
 * @param  {boolean} [international]
 * @param  {string} [defaultCountry]
 * @param  {boolean} [useNationalFormatForDefaultCountryValue]
 * @param  {object} metadata
 * @return {string}
 */

function getParsedInputForValue(value, country, international, defaultCountry, useNationalFormatForDefaultCountryValue, metadata) {
  if (!value) {
    return '';
  }

  if (!country && !defaultCountry) {
    return value;
  }

  var asYouType = new AsYouType(undefined, metadata);
  asYouType.input(value);
  var phoneNumber = asYouType.getNumber();

  if (phoneNumber) {
    if (country) {
      if (phoneNumber.country && phoneNumber.country !== country) {
        console.error("[react-phone-number-input] Phone number ".concat(value, " corresponds to country ").concat(phoneNumber.country, " but ").concat(country, " was specified instead."));
      }

      if (international) {
        return phoneNumber.nationalNumber;
      }

      return parseDigits(phoneNumber.formatNational());
    } else {
      if (phoneNumber.country && phoneNumber.country === defaultCountry && useNationalFormatForDefaultCountryValue) {
        return parseDigits(phoneNumber.formatNational());
      }

      return value;
    }
  } else {
    return '';
  }
}
//# sourceMappingURL=PhoneInput.js.map