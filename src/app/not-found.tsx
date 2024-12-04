import Link from "next/link";
import { Home } from "lucide-react";
import assets from "@/variables/images";
import Image from "next/image";

export function NotFound404() {
  return (
    <main className="min-h-[93vh] w-full flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `radial-gradient(#4A90E2 0.5px, transparent 0.5px)`,
          backgroundSize: "24px 24px",
        }}
      />

      <div className="relative z-10 text-center px-4 py-16 max-w-2xl mx-auto">
        <div className="w-64 h-64 mx-auto mb-3 motion-safe:animate-bounce">
          <Image
            src={assets.images.movingTruck}
            alt="moving truck"
            width={0}
            height={0}
            fill
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-grayscale-500">
          앗! 길을 잃었어요!
        </h1>

        <h2 className="text-xl md:text-2xl font-medium mb-6 text-grayscale-300">
          요청하신 페이지가 이사를 갔거나, 존재하지 않아요.
        </h2>

        <p className="text-lg md:text-xl mb-12 text-gray-600">
          우리 트럭이 길을 잘못 들었나 봐요... 🚛
        </p>

        <Link href="/" passHref>
          <button
            aria-label="홈페이지로"
            className="inline-flex items-center px-6 py-3 bg-pr-blue-300 text-white rounded-lg 
                        font-medium transition-transform hover:scale-105 focus:outline-none 
                        focus:ring-2 focus:ring-pr-blue-200 focus:ring-offset-2"
          >
            <Home className="w-5 h-5 mr-2" />
            홈으로 돌아가기
          </button>
        </Link>
      </div>
    </main>
  );
}

export default NotFound404;
