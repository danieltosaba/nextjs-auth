import { useRef, useState } from "react";

export default function SignUp() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passRef = useRef<HTMLInputElement>(null);
  const [message, setMessage] = useState<any>(null);

  const loginHandler = async () => {
    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current?.value,
        password: passRef.current?.value,
      }),
    });
    const json = await response.json();
    setMessage(json);
  };

  return (
    <div>
      <div>{JSON.stringify(message)}</div>
      <h1>Create New User</h1>
      <div>
        <input type="email" ref={emailRef} />
      </div>
      <div>
        <input type="password" ref={passRef} />
      </div>
      <div>
        <button onClick={loginHandler}>Login</button>
      </div>
    </div>
  );
}
