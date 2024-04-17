import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <>
      <Layout>
        <main>
          <div className="container">
            <div className="h-[50vh] flex items-center justify-center">
              <Dialog>
                <DialogTrigger>
                  <Button className="">Open Modal</Button>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      your account and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </main>
      </Layout>
    </>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
