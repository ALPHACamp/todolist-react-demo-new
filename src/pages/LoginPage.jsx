import {
  AuthContainer,
  AuthInputContainer,
  AuthButton,
  AuthLinkText,
} from '../components/common/auth.styled';
import ACLogoIcon from '../assets/images/ac-logo.svg';
import AuthInput from '../components/AuthInput';

const LoginPage = () => {
  return (
    <AuthContainer>
      <div>
        <img src={ACLogoIcon} />
      </div>
      <h1>登入 Todo</h1>

      <AuthInputContainer>
        <AuthInput />
      </AuthInputContainer>

      <AuthInputContainer>
        <AuthInput />
      </AuthInputContainer>
      <AuthButton>登入</AuthButton>
      <AuthLinkText>註冊</AuthLinkText>
    </AuthContainer>
  );
};

export default LoginPage;
