import { Logo } from './_components/logo'
const AuthLayout = ({ children }: { children: React.ReactNode }) => {
    console.log("hiic", children)
    return (
        <div className='h-full flex items-center justify-center space-y-6'>
            <Logo />
            {children} </div >
    )
}
export default AuthLayout;