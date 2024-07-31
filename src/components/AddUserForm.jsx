import React from 'react'
import { useForm } from 'react-hook-form';
import { ErrorMessage } from "@hookform/error-message";

const AddUserForm = (props) => {
    const { register, formState: {errors}, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data);
        props.addUser(data);
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input
                type='text'
                placeholder='Ingrese name'
                {
                    ...register (
                        'name',
                        {
                            required: 'Campo requerido.'
                        }                        
                    )
                }
            />
            <span className='text-danger text-small d-block mb-2'>
                <ErrorMessage
                    errors={errors}
                    name='name'                      
                    render={({ message }) => <p>{message}</p>}
                />
            </span>
            <label>Username</label>
            <input
                type='text'
                placeholder='Ingrese username'
                {
                    ...register (
                        'username',
                        {
                            required: 'Campo requerido.'
                        }
                    )
                }
            />
            <span className='text-danger text-small d-block mb-2'>
                <ErrorMessage
                    errors={errors}
                    name='username'                      
                    render={({ message }) => <p>{message}</p>}
                />
            </span>
            <button>Add new user</button>
        </form>
    );
}
 
export default AddUserForm;