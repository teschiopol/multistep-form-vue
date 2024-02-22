import * as yup from "yup";

export function useThreeModel ()
{
    return yup.object({
        address: yup.string().required(),
        postalCode: yup
            .string()
            .required()
            .matches(/^[0-9]+$/, 'Must be numeric'),
        city: yup
            .string()
            .when('postalCode', {
                is: '999',
                then: (schema) => schema.required(),
                otherwise: schema => schema
            })
    })
}
