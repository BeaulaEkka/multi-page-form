import Input from "@/app/components/Input";
import SubmitButton from "@/app/components/SubmitButton";


export default function StepTwoForm() {
  return (
    <form className="flex flex-1 flex-col items-center ">
      <div className="flex w-full flex-col gap-8 lg:max-w-[700px]">
        <Input
          label="Coupon Code"
          id="coupon"
          type="text"
          required
          placeholder="123456"
          
          minLength={5}
        />

        <Input
          label="Discount %"
          id="discount"
          type="number"
          required
          placeholder="35"
          min={1}
          max={100}
          
        />

        <SubmitButton text="Submit" />
      </div>
    </form>
  );
}
