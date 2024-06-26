import { roboto_mono, young_serif,  } from "@/app/font"
import { cn } from "@/lib/utils"
import { Logo } from "./logo"
import { Search } from "./search"
import { Button } from "./ui/button"

export const Navbar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center p-2 bg-stone-900 text-white ">
                <div className="flex gap-4 px-2 items-center">
                    <div>

                        <Logo/>
                    </div>
                    <div>
                    <span className={cn(" px-2 font-bold text-xl  hover:underline hover:cursor-pointer", young_serif.className,)}>
                            Favorites
                        </span>
                    </div>

                </div>
                    <Search  />
                    <div className="flex gap-4 px-2 items-center">
                    <Button size="sm" variant="bwghost" className="rounded-full text-xs h-8"> Get Plus+</Button>
                    <Button size="sm" variant="bookworm" className="rounded-full text-xs h-8">Sign in</Button>
                    </div>
            </nav> 
        </div>
    )
}