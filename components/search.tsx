import { Input } from "@/components/ui/input"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { SearchCheck } from "lucide-react"

export const Search = () => {
    return (
        <div className="flex items-center">
            <Input  type="search" placeholder="Search groups" className="w-64"/>

        </div>
    )
}