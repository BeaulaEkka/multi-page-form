import StepOneForm from "./add/step-one/StepOneForm";

export default function Home() {
  return (
    <div className="flex flex-col w-full mx-auto bg-slate-900 min-h-screen ">
      <div className="flex flex-col mx-auto mt-40 w-[65%] ">
        <h1 className="text-4xl font-bold text-emerald-600">Share a Deal</h1>
        <p className="text-white">
          Have an amazing deal or discount tailored for developers? Let us know!
        </p>
        <div className="w-[400px] mt-6">
          <StepOneForm />
        </div>
      </div>
    </div>
  );
}
