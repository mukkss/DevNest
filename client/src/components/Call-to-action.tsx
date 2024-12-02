import React from "react";
import { Button } from "./Button";

export default function CallToAction() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-white">
              Ready to Revolutionize Your Coding Workflow?
            </h2>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Join thousands of developers who are already experiencing the future of collaborative coding. Start your journey today!
            </p>
          </div>
          <div className="space-x-4">
            <Button className="bg-[#20C997] hover:bg-[#1a7f6f]">
              Get Started for Free
            </Button>
            <Button variant="outline" className="text-white border-white hover:bg-white/10">
              Schedule a Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
