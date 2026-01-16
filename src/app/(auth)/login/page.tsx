import { Loginform } from "@/features/auth/components/login-form";
import { requireUnAuth } from "@/lib/auth-utils";

const Page = async  () => {

    await requireUnAuth();

    return ( <div>
       <Loginform/>
    </div>
    );
};

export default Page;