import * as yup from "yup";

export function useOneModel ()
{
    return yup.object({
        name: yup.string().required(),
        email: yup.string().required().email(),
    })
}
