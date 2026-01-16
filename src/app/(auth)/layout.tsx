
import { AuthLayout } from "@/features/auth/auth-layout";
const Layout =({ children }: {children: React.ReactNode; }) => {

    return (
        <div>

        <AuthLayout children={children}/>
          
        </div>
    )};

export default Layout;