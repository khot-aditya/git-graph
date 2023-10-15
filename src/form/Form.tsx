import { useQueryParam, StringParam } from "use-query-params";


const FormComponent = () => {

    const [foo, setFoo] = useQueryParam('foo', StringParam);

    return (
        <div className='form-component'>
            FormComponent {foo}
        </div>
    )
}

export default FormComponent