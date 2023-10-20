import Link from "next/link";
import { useEffect, useRef } from "react";
import { BsGithub } from "react-icons/bs";
import * as S from "./Login.styled";

const Login = ({ openModal }: { openModal: () => void }) => {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: any) => {
      if (boxRef.current && !boxRef.current.contains(e.target)) {
        openModal();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <S.Main>
      <div ref={boxRef} className='login__modal'>
        <h1>Login with Github</h1>
        <Link
          href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
        >
          <BsGithub />
        </Link>
      </div>
    </S.Main>
  );
};

export default Login;
