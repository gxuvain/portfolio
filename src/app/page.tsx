import { Grid } from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
    return (
        <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
            <div className="max-w-7xl w-full">
                <FloatingNav navItems={navItems} />
                <Hero />
                <Grid />
                <footer>
                    <p className="text-center text-white/50 mt-10">
                        © 2021 Gauvain Palanga. All rights reserved.
                    </p>
                </footer>
            </div>
        </main>
    );
}
