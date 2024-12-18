import Right from "@/components/icons/Right";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useBranch } from "@/components/BranchContext";

export default function Hero() {
  const router = useRouter();
  const { selectedBranch } = useBranch();

  const goToMenu = () => {
    if (selectedBranch?._id) {
      router.push(`/menu?branchId=${selectedBranch._id}`);
    } else {
      router.push("/menu");
    }
  };

  return (
    <section className="hero md:mt-4">
      <div className="py-8 md:py-12">
        <h1 className="text-4xl font-semibold">
          Everything
          <br />
          is better
          <br />
          with a&nbsp;
          <span className="text-primary">Pizza</span>
        </h1>
        <p className="my-6 text-gray-500 text-sm">
          Pizza is the missing piece that makes every day complete, a simple yet
          delicious joy in life
        </p>
        <div className="flex gap-4 text-sm">
          <button
            onClick={goToMenu}
            className="flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full"
          >
            Order now
            <Right />
          </button>
          <button className="flex items-center border-0 gap-2 py-2 text-gray-600 font-semibold">
            Learn more
            <Right />
          </button>
        </div>
      </div>
      <div className="relative hidden md:block">
        <Image
          src={"/pizza2.png"}
          fill
          style={{ objectFit: "contain" }}
          alt={"pizza"}
          sizes="(max-width: 768px) 100vw, (min-width: 769px) 50vw"
          priority
        />
      </div>
    </section>
  );
}
