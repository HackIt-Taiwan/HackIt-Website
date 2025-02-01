import { Icon } from "@iconify/react";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="p-y-2 p-x-5 sticky top-0 z-50 w-full bg-transparent">
      <div className="flex items-center justify-center">
        <div className="container flex h-14 items-center justify-between p-2">
          {/* 左側按鈕區域 */}
          <div className="flex space-x-1">
            <Link href={"/"}>
              <button className="bg-border hover:bg-primary p-1">
                <Icon icon="pixelarticons:home" width="18" height="18" />
              </button>
            </Link>
          </div>

          {/* 右側按鈕區域 */}
          <div className="flex space-x-1">
            <Link href={"/news"}>
              <button className="bg-border hover:bg-primary p-1">
                <p className="text-sm font-light">新聞與公告</p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
