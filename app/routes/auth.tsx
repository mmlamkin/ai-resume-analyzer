import React, {useEffect} from "react";
import {usePuterStore} from "~/lib/puter";
import {useLocation, useNavigate} from "react-router";

export const meta = () => [
    { title: "Resumind | Auth" },
    { name: "description", content: "Log into your account" },
]

const Auth  = () => {

    const {isLoading, auth} = usePuterStore();
    const location = useLocation();
    const next = location.search.split("=")[1];
    const navigate = useNavigate();

    useEffect(() => {
        if(auth.isAuthenticated) {
            navigate(next)
        }
    }, [auth.isAuthenticated, next, navigate])

    return (
        <main className={"bg-[url('/images/bg-main.svg')] bg-cover"}>
            <div className={"gradient-border shadow-lg"}>
                <section className={"flex flex-col gap-8 bg-white p-10 rounded-2xl"}>
                    <div className={"flex flex-col items-center gap-2 text-center"}>
                        <h1>Welcome</h1>
                        <h2>Log in to continue your journey</h2>
                    </div>
                </section>
            </div>
            <div className={"flex flex-col items-center gap-2 text-center"}>
                {isLoading ? (
                    <button className={"auth-button"}>
                        Signing you in
                    </button> )
                    : (
                        <>
                        {auth?.isAuthenticated ? (
                            <button className={"auth-button"} onClick={auth.signOut}>Log out</button>
                        ) : (
                            <button className={"auth-button"} onClick={auth.signIn}>Log in</button>
                        )
                        }
                        </>
                    )
                }
            </div>
        </main>
    )
}

export default Auth;