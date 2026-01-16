import { requireAuth } from "@/lib/auth-utils";

const Page = async () => {
  

await requireAuth();

  return (
    <div className="">
        protected server components
    </div>
  );
};

export default Page;