import { young_serif } from "@/app/font"
import { cn } from "@/lib/utils"

export const Logo = () => {
    return (
        <div>
                <div className={cn(" px-2 font-bold text-2xl text-yellow-500", young_serif.className,)}>
                    Bookworms
                </div>
        </div>
    )
}