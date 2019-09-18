import React from "react";
import { LitteraContext } from ".";

/**
 * Translation HOC.
 * @param {Object} translations
 */
const withLittera = translations => Component =>
    function WrapperComponent(props) {
        return (
            <LitteraContext.Consumer>
                {state => {
                    const translated = {};

                    const transes =
                        typeof translations === "function"
                            ? { ...translations(state.preset) }
                            : { ...translations };

                    Object.keys(transes).forEach(e => (translated[e] = transes[e][state.language]));

                    return (
                        <Component
                            {...props}
                            translated={translated}
                            language={state.language}
                            setLanguage={state.setLanguage}
                        />
                    );
                }}
            </LitteraContext.Consumer>
        );
    };

export default withLittera;