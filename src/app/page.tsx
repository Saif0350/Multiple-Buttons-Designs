import Button2 from "@/components/Button2";
import Button3 from "@/components/Button3";
import Button4 from "@/components/Button4";
import Button5 from "@/components/Button5";
import Button6 from "@/components/Button6";
import Button1 from "@/components/Buttons/Button1";

export default function Home() {
  return (
    <>
      <main>
        <div className="flex justify-center items-center w-full h-screen">
          <div className="grid grid-cols-6 gap-10">
            <Button1 />
            <Button2 />
            <Button3 />
            <Button4 />
            <Button5 />
            <Button6 />
          </div>
        </div>
      </main>
    </>
  );
}
