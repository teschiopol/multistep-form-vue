import * as yup from "yup";

export function useFourModel ()
{
    return  yup.object({
        terms: yup.bool().required().equals([true]),
    })
}
