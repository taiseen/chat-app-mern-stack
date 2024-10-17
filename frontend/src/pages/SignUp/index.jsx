import BtnAuth from "../../components/auth/BtnAuth";
import Input from "../../components/auth/Input";
import GenderCheckbox from "./GenderCheckbox";
import toast from "react-hot-toast";
import { useRegistration } from "../../api/mutation";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";


const SignUp = () => {

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

    const { mutate: registerMutation, isPending } = useRegistration();

    const isBtnDisable = isSubmitting || isPending;


    const onSubmit = async (data) => {

        if (data.password !== data.confirmPassword) {
            toast.error("Passwords do not match!");
            return;
        }

        registerMutation(data);
    };


    return (
        <div className='flex flex-col items-center justify-center min-w-96 mx-auto'>

            <div
                className='w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-5'
            >

                <h1 className='text-3xl font-semibold text-center text-gray-300 mb-4'>
                    Sign Up <span className='text-blue-500'> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        register={register}
                        inputKey="fullName"
                        placeholder="John Doe"
                        label="Full Name"
                        required={true}
                        errors={errors}
                    />

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
                        minLength={6}
                    />

                    <Input
                        register={register}
                        inputKey="confirmPassword"
                        placeholder="Confirm Password"
                        label="Confirm Password"
                        type="password"
                        required={true}
                        errors={errors}
                        minLength={6}
                    />

                    <GenderCheckbox register={register} errors={errors} />

                    <Link
                        to={"/login"}
                        className='text-sm hover:underline hover:text-blue-600 mt-2 inline-block'
                    >
                        Already have an account?
                    </Link>

                    <BtnAuth isBtnDisable={isBtnDisable} label="Sign Up" />
                </form>
            </div>
        </div>
    );
};

export default SignUp;
