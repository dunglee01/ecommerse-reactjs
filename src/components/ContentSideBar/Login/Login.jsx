import InputCommon from '@components/InputCommon/InputCommon';
import styles from './styles.module.scss';
import { PiUserCircleThin } from 'react-icons/pi';
import Button from '@components/Button/Button';

function Login() {
    const { container, boxTitle, boxSubmit, forgotPassword } = styles;
    return (
        <div className={container}>
            <div className={boxTitle}>
                <PiUserCircleThin
                    style={{
                        fontSize: '40px'
                    }}
                />
                <div>SIGN IN</div>
            </div>

            <div
                style={{
                    marginTop: '30px'
                }}
            >
                <InputCommon label={'Username or email'} type={'text'} />
                <InputCommon label={'Password'} type={'password'} />

                <div>
                    <input type='checkbox' />
                    <span
                        style={{
                            marginLeft: '8px'
                        }}
                    >
                        Remember me
                    </span>
                </div>

                <div className={boxSubmit}>
                    <Button content={'LOGIN'} />
                </div>

                <div className={forgotPassword}>Lost your password?</div>
            </div>
        </div>
    );
}

export default Login;
