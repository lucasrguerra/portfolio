import { Pixelify_Sans } from "next/font/google";
import HelloWorld from "@/components/HelloWorld";
import Header from "@/components/Header";
import Image from "next/image";

const pixelify_sans = Pixelify_Sans({
    subsets: ["latin"],
    weight: "700",
});

import foto from "@/public/foto.png";

export default async function Page() {

    return (
        <main className="">
            <Header />

            <section className="p-8 md:flex justify-center">
                <div className="pb-8 flex justify-center md:pb-0">
                    <Image
                        className="shadow-2xl rounded-full animate-fade-right animate-once animate-duration-[400ms] animate-ease-in"
                        src={foto}
                        alt="Foto minha"
                        height={200}
                    />
                </div>

                <div className="text-center text-xl md:w-8/12 md:px-8 md:my-auto lg:w-6/12">
                    <HelloWorld />

                    <p className="animate-fade-up animate-once animate-duration-[400ms] animate-ease-in">
                        Meu nome é &nbsp;
                        <span className={"text-2xl text-green-500" + " " + pixelify_sans.className}>Lucas</span>,
                        eu sou um Desenvolvedor de Sistemas!
                        Trabalho integrando hardware e software para criar o futuro!
                    </p>
                </div>
            </section>
        </main>
    );
}
