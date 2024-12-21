import { Icon } from "@iconify/react";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full p-y-2 p-x-5 bg-transparent">
      <div className="flex items-center justify-center">
        <div className="container flex h-14 items-center justify-between p-2">
          {/* 左側按鈕區域 */}
          <div className="flex space-x-1">
            <button className="p-1 bg-border hover:bg-primary">
              <Icon icon="pixelarticons:home" width="18" height="18" />
            </button>
            <button className="p-1 bg-border hover:bg-primary">
              <p className="font-light text-sm">關於我們</p>
            </button>
          </div>

          {/* 右側按鈕區域 */}
          <div className="flex space-x-1">
            <button className="p-1 bg-border hover:bg-primary">
              <p className="font-light text-sm">聯繫我們</p>
            </button>
            <button className="p-1 bg-border hover:bg-primary">
              <p className="font-light text-sm">活動與項目</p>
            </button>
            <button className="p-1 bg-border hover:bg-primary">
              <p className="font-light text-sm">新聞與公告</p>
            </button>
            <button className="p-1 bg-border hover:bg-primary">
              <p className="font-light text-sm">加入我們</p>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
