import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"

export const Search = () => {
    return (
        <div>
            <Input  type="search" placeholder="Search groups" className={cn("w-64")}/>
        </div>
    )
}