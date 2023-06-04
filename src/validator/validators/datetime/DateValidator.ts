import { ValidatorDelegate } from "../../Validator.type";
import { CustomValidator } from "../CustomValidator";

import { Standard_ISO_8601 } from "../../../standards/datetime/Standard_ISO_8601";

export const DateValidator: ValidatorDelegate<any> =
	CustomValidator(Standard_ISO_8601.formula);