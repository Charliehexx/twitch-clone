import Image from 'next/image'
import { Poppins } from 'next/font/google'
import { cn } from '@/lib/utils'
const font = Poppins({
    subsets: ["latin"],
    weight: ["200", "400", "500"]
})
console.log('Font Object:', Poppins);
export const Logo = () => {
    return (
        <div className='flex flex-col items-center gap-y-4'>
            <div className='bg-white rounded-full py-1'>
                <Image src="/spooky.svg"
                    alt="game"
                    height="80"
                    width="80" />
            </div>
            <div className='flex flex-col items-center'>
                <p className={cn("text-xl font-semibold", font.className)}>
                    Gamehub
                </p>
                <p
                    className="text-sm text-muted-foreground">
                    lets play
                </p>
            </div>

        </div>
    )
}