"use client"

import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";
import { useTRPC } from "@/trpc/client";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { create } from "domain";
import { toast } from "sonner";

const Page =  () => {
  
const trpc = useTRPC();
const { data } = useQuery(trpc.getworkflows.queryOptions());
const queryClient = useQueryClient();
const create = useMutation(trpc.createworkflow.mutationOptions( {
  onSuccess: () => {
      toast.success("Job Queued")
  }
}));

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center flex-col gap-y-6">
        protected server components

        <div>
          {JSON.stringify(data, null, 2)}
        </div>
        <Button disabled={create.isPending} onClick={() => {
          create.mutate()
        }}>
          Create Workflow
        </Button>
    </div>
  );
};

export default Page;