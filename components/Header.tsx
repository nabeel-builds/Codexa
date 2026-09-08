import Image from "next/image"
import Link from "next/link"


const Header = () => {
    return (
        <header className="fixed top-0 left-0 z-50 h-16 border-b border-white/6 bg-white/7 backdrop-blur-md">
            <nav className="mx-auto flex h-full max-w-7xl items-center justify-between px-4 sm:px-6">
                <Link href='/'>
                    <Image
                        width={100}
                        height={100}
                        src={'/LogoLong.png'}
                        alt="Codexa Logo"
                        className="h-9 w-auto rounded-md" />
                </Link>
                <div className="flex items-center gap-5">
                    <Link 
                    href={"/projects"} 
                    className="text-[13px] font-medium text-white/40 transition-colors hover:text-white/80">
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header