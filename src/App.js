import React from "react";
import { IntlProvider, useIntl, defineMessages } from "react-intl";
import messagesEn from "./lang/en.json";

const messages = defineMessages({
  explanation: {
    id: "cookieConsentBanner.explanation",
    defaultMessage: "{brandNameTitle} uses cookies to make the website.",
  },
});

export default function App() {
  return (
    <IntlProvider messages={messagesEn} locale="en-US" defaultLocale="en">
      <Text />
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
