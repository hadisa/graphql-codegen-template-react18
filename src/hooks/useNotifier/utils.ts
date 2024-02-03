
import { IntlShape } from "react-intl";
import { IMessage } from "../../components/messages";
import { commonMessages } from "../../utils/intl";

export const getDefaultNotifierSuccessErrorData = (
  errors: any[],
  intl: IntlShape,
): IMessage =>
  !errors.length
    ? {
        status: "success",
        text: intl.formatMessage(commonMessages.savedChanges),
      }
    : {
        status: "error",
        text: intl.formatMessage(commonErrorMessages.unknownError),
      };
