import { Icon } from "@iconify/react";
import { BackgroundBeamsWithCollision } from "../ui/background-beams-with-collision";

export default function Footer() {
  return (
    <footer>
      <BackgroundBeamsWithCollision className="flex flex-col space-y-10">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center relative z-50 font-unifont">
          {/* 左邊區域 */}
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h4 className="text-2xl font-bold mb-2">HackIt</h4>
            <p className="text-lg">為臺灣高中生打造屬於自己的黑客松平台</p>
          </div>

          {/* 右邊區域 */}
          <div className="flex space-x-6 text-xl mb-6 md:mb-0">
            {/* 社群連結 */}
            <a
              href="https://www.threads.net/@hackit.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary hover:rotate-12"
            >
              <Icon icon="akar-icons:threads-fill" width="24" height="24" />
            </a>
            <a
              href="https://www.instagram.com/hackit.tw"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary hover:rotate-12"
            >
              <Icon icon="akar-icons:instagram-fill" width="24" height="24" />
            </a>
            <a
              href="https://github.com/HackIt-Taiwan"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary hover:rotate-12"
            >
              <Icon icon="akar-icons:github-fill" width="24" height="24" />
            </a>
          </div>
        </div>

        {/* 底部版權 */}
        <div className="text-center py-4 bg-dark-800 font-unifont">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} HackIt. All rights reserved.
          </p>
        </div>
      </BackgroundBeamsWithCollision>
    </footer>
  );
}
