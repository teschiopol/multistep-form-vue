import * as yup from "yup";

export function useTwoModel ()
{
    return yup.object({
        password: yup.string().required().min(6),
        confirmPassword: yup
            .string()
            .required()
            .min(6)
            .oneOf([yup.ref('password')], 'Passwords must match'),
    })
}
