import { useState } from 'react'

export const useForm = () => {
    const [values, setValues] = useState({
        cardName: '',
        cardNumber: '',
        cardType: '',
        cardExpiration: '',
        cardSecurityCode: '',
        cardPostalCode: '',
        focus: ''
    })

    const [errors, setErrors] = useState({})

    const handleFocus = (e: { target: { name: string; }; }) => {
        setValues({
            ...values,
            focus: (e.target.name === 'cardSecurityCode') ? 'cvc' : e.target.name
        });
    }

    const handleChange = (e: { target: { name: string; value: number; }; }) => {
        const { name, value } = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault()
        setErrors('Error')
    };

    return { handleChange, handleFocus, handleSubmit, values, errors };
};
