import ButAuth from "../components/auth/BtnAuth";
import Input from "../components/auth/Input";
import { useLogin } from "../api/mutation";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const Login = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm(); // custom hook by lib...

    const { mutate: loginMutation, isPending } = useLogin();

    const isBtnDisable = isSubmitting || isPending;


    const handleLogin = (data) => loginMutation(data);


    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>
            <div
                className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5'
            >
                <h1 className='text-3xl font-semibold text-center text-gray-300 mb-4'>
                    Login <span className='text-blue-500'>ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit(handleLogin)}>
                    <Input
                        register={register}
                        inputKey="userName"
                        placeholder="johndoe"
                        label="Username"
                        required={true}
                        errors={errors}
                    />

                    <Input
                        register={register}
                        inputKey="password"
                        placeholder="Enter Password"
                        label="Password"
                        type="password"
                        required={true}
                        errors={errors}
                    />

                    <Link to='/signup' className='text-sm hover:underline hover:text-blue-600 mt-4 inline-block'>
                        {"Don't"} have an account?
                    </Link>

                    <ButAuth isBtnDisable={isBtnDisable} label="Login" />
                </form>
            </div>
        </div>
    );
};

export default Login;
