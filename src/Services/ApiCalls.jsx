import { toast } from "react-toastify";
import { utilsValidator } from "../Helpers/utils/utilsValidator";
import { waitControlHide, waitControlShow } from "../components/Controls/WaitControl/waitControl";

const urlBase = 'https://localhost:7217/api/';

export const getRequestUserInfo = () =>
    sessionStorage.requestUserInfo ?
        JSON.parse(sessionStorage.requestUserInfo) :
        null;


export class ApiCalls {

    static httpPost = (
        url,
        obj,
        useWaitControl = true,
        isEvaluateMessage = true
    ) => {
        if (useWaitControl) {
            waitControlShow();
        }

        const requestUserInfo = getRequestUserInfo();

        const request = {
            ...obj,
            requestUserInfo,
        };

        const urlComplete = `${urlBase}${url}`;

        return fetch(urlComplete, {
            method: 'POST',
            body: JSON.stringify(request),
            headers: {
                'Content-type': 'application/json',
                authorization: `Bearer ${sessionStorage.access_token}`,
            },
        })
            .catch(error => {
                if (useWaitControl) {
                    waitControlHide();
                }
                toast.error(error.message);
            })
            .then(response => {
                if (utilsValidator.isUndefined(response) || utilsValidator.isNull(response)) {
                    return response;
                }
                if (response && response.status && response.status === 404) {
                    return response;
                }
                if (response.stack || response.TypeError) {
                    return response;
                }

                return response.json();
            })
            .then(response => {
                if (useWaitControl) {
                    waitControlHide();
                }
                return isEvaluateMessage ? showValidationMessage(response) : response;
            });
    };


    static GetTokenAuthentication = (
        url,
        request,
        useWaitControl = true,
        isEvaluateMessage = true,
    ) => {
        if (useWaitControl) {
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
            .catch(error => {
                if (useWaitControl) {
                    waitControlHide();
                }
                toast.error(error.message);
            })
            .then(response => {
                if (utilsValidator.isUndefined(response) || utilsValidator.isNull(response)) {
                    return response;
                }
                if (response && response.status && response.status === 404) {
                    return response;
                }
                if (response.stack || response.TypeError) {
                    return response;
                }

                return response.json();
            })
            .then(response => {
                if (useWaitControl) {
                    waitControlHide();
                }
                return isEvaluateMessage ? showValidationMessage(response) : response;
            });
    };
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