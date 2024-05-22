import { toast } from "react-toastify";
import { utilsValidator } from "../Helpers/utils/utilsValidator";
import { waitControlHide, waitControlShow } from "../components/Controls/WaitControl/waitControl";

const urlBase = 'https://localhost:7217/api/';

export class ApiCalls {

    static GetTokenAuthentication = (
        url,
        request,
        activeWaitControl = true,
        isEvaluateMessage = true,
    ) => {
        debugger;
        if (activeWaitControl) {
            waitControlShow();
        }

        const formData = new URLSearchParams();
        formData.append('grant_type', 'password');
        formData.append('usuarioId', request.userName);
        formData.append('password', request.password);

        return fetch(`${urlBase}${url}`, {
            method: 'POST',
            body: formData.toString(),
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            }
        })
            .then(response => {
                //TODO Validations

                if (response && response.status && response.status === 404) {
                    return response;
                }

                if (response.stack || response.TypeError) {
                    return response;
                }

                return response.json();
            }).then(response => {
                if (activeWaitControl) {
                    waitControlHide();
                }

                return isEvaluateMessage ? showValidationMessage(response) : response;
            })
    }
}

const showValidationMessage = (response) => {
    if (response) {
        if (!utilsValidator.isNullOrEmpty(response.message)) {
            toast.warn(response.message);
        }
        if (!utilsValidator.isNullOrEmpty(response.ValidationErrorMessage)) {
            toast.warn(response.ValidationErrorMessage);
        }
        if (!utilsValidator.isNullOrEmpty(response.SuccessMessage)) {
            toast.success(response.SuccessMessage);
        }
    }
    return response;
}