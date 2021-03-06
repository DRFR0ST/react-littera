import * as React from "react";
import withLittera from '../src/withLittera'
import { mount } from "enzyme";
import { LitteraProvider } from "../src";
import { LitteraProps } from "../types";

const mockTranslations = {
  simple: {
    de_DE: "Einfach",
    pl_PL: "Proste",
    en_US: "Simple"
  },
  hello: (name: string) => ({
    de_DE: `Hallo ${name}`,
    pl_PL: `Cześć ${name}`,
    en_US: `Hello ${name}`
  })
};

const mockTranslated = {
  simple: "Simple",
  hello: `Hello Mike`
};

const Component = withLittera(mockTranslations)(({translated}) => {
  return <div>{translated.simple}</div>
});

const ComponentWithVar = withLittera(mockTranslations)(({translated}) => {
  return <div>{translated.hello("Mike")}</div>
});

describe('withLittera', () => {
  it('should be a function', () => {
    expect(typeof withLittera).toBe('function')
  })

  it('should render the component with translated text', () => {
    const wrapper = mount(
      <Component />, 
      {
        wrappingComponent: LitteraProvider, 
        wrappingComponentProps: {locales: ["en_US"], initialLocale: "en_US"}
      });

    expect(wrapper.find("div").props().children).toBe(mockTranslated.simple);
  });

  it('should render the component with translated text with variables', () => {
    const wrapper = mount(
      <ComponentWithVar />, 
      {
        wrappingComponent: LitteraProvider, 
        wrappingComponentProps: {locales: ["en_US"], initialLocale: "en_US"}
      });

    expect(wrapper.find("div").props().children).toBe(mockTranslated.hello);
  });
})
