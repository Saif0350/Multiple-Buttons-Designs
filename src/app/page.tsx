import Button10 from "@/components/Button10";
import Button11 from "@/components/Button11";
import Button12 from "@/components/Button12";
import Button2 from "@/components/Button2";
import Button3 from "@/components/Button3";
import Button4 from "@/components/Button4";
import Button5 from "@/components/Button5";
import Button6 from "@/components/Button6";
import Button7 from "@/components/Button7";
import Button8 from "@/components/Button8";
import Button9 from "@/components/Button9";
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
            <Button7 />
            <Button8 />
            <Button9 />
            <Button10 />
            <Button11 />
            <Button12 />
          </div>
        </div>
      </main>
    </>
  );
}
