import { dashboard, login, register } from '@/routes';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { ArrowBigRightDash } from 'lucide-react';
import welcomeAvatar from '../assets/welcomeAvatar.png';
import BackgroundBlobs from '@/components/background-circles';
import Typewriter from "typewriter-effect"

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage<SharedData>().props;

    return (
        <>
            <Head title="Bem-vindo">
                <link rel="preconnect" href="https://fonts.bunny.net" />
                <link
                    href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600"
                    rel="stylesheet"
                />
            </Head>

            <BackgroundBlobs></BackgroundBlobs>

            <div className="flex min-h-screen flex-col items-center bg-[#FDFDFC] m-5 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <header className="mb-6 w-full text-sm not-has-[nav]:hidden lg:max-w-4xl">
                    <nav className="flex items-end justify-end gap-4">
                        {auth.user ? (
                            <Link
                                href={dashboard()}
                                className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                            >
                                Dashboard
                            </Link>
                        ) : (
                            <>
                                <Link
                                    href={login()}
                                    className="inline-block rounded-sm border border-transparent px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#19140035] dark:text-[#EDEDEC] dark:hover:border-[#3E3E3A]"
                                >
                                    Login
                                </Link>
                                {canRegister && (
                                    <Link
                                        href={register()}
                                        className="inline-block rounded-sm border border-[#19140035] px-5 py-1.5 text-sm leading-normal text-[#1b1b18] hover:border-[#1915014a] dark:border-[#3E3E3A] dark:text-[#EDEDEC] dark:hover:border-[#62605b]"
                                    >
                                        Comece agora
                                    </Link>
                                )}
                            </>
                        )}
                    </nav>
                </header>
                <main className="flex flex-col items-center justify-center text-center font-lexend">
                    <img
                        className="w-full max-w-xs h-auto mx-auto"
                        src={welcomeAvatar}
                        alt="Avatar lendo livro"
                    />
                    
                    <p className="mb-5 text-2xl font-semibold text-black">
                        <Typewriter options={{strings: ["Gerenciador de Tarefas e To-Do List", "Organize seu dia a dia!", "Monte seu segundo cérebro!", "Nós listamos e você realiza."], loop: true, autoStart:true, cursor: '_', delay: 75}}/>
                    </p>

                    <p className="font-lexend font-light text-secondary">
                        Essa ferramenta de produtividade é feita para ajudar
                        você a gerenciar suas tarefas de maneira fácil e
                        otimizada!
                    </p>
                    
                    
                    <Link
                        href={register()}
                        className="relative m-5 flex w-full max-w-2xs justify-center rounded-xl bg-primary p-2 font-semibold text-white shadow-lg shadow-primary-foreground transition-transform hover:bg-primary-foreground hover:scale-105 active:scale-90 active:shadow-sm"
                    >
                        Vamos começar
                        <ArrowBigRightDash className="absolute right-5 animate-xbounce" />
                    </Link>
                </main>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
