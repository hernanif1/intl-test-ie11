import React from "react";
import { IntlProvider, useIntl, defineMessages } from "react-intl";
import messagesEn from "./lang/en.json";

const messages = defineMessages({
  explanation: {
    id: "cookieConsentBanner.explanation",
    defaultMessage:
      "{brandNameTitle} uses cookies to make the website, the chat function and the ordering platform work optimally, to analyze the use of the website and to enable advertisements to fit your personal preferences. [Please read our cookie policy to find out more](/cookieverklaring).",
  },
});

export default function App() {
  return (
    <IntlProvider messages={messagesEn} locale="en-US" defaultLocale="en">
      <Text />
      asf
    </IntlProvider>
  );
}

const Text = () => {
  const intl = useIntl();
  const tex = intl.formatMessage(messages.explanation, {
    brandNameTitle: "Duxxie.nl",
  });

  return <p>{tex}</p>;
};
