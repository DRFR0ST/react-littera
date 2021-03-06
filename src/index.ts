/**
 * Object containing all available translations.
 * @typedef {Object} ITranslations
 * @example
 * {
 *    "example": {
 *        "en_US": "Example",
 *        "de_DE": "Beispiel"
 *    }
 * }
 */

/**
 * Function returning all available translations. Preset is being passed as argument.
 * @typedef {Object} ITranslationsFunction
 * @example
 * const translations = (preset) => ({
 *    "example": {
 *        "en_US": "Example",
 *        "de_DE": "Beispiel"
 *    }
 * })
 */

 /**
  * Object containing already translated text.
  * Is being flatened from ITranslations.
 * @typedef {Object} ITranslated
 * @example
 * {
 *    "example": "Beispiel"
 * }
 */


export { LitteraContext, LitteraProvider } from "./LitteraProvider";
export { default as withLittera } from "./withLittera";
export { useLittera, useLitteraMethods } from "./hooks";

export { ILitteraProvider, ITranslations, ITranslated } from "../types/index.d";
