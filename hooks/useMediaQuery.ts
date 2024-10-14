import { useState, useEffect } from "react";

// 自定义 Hook：useMediaQuery
// 用于检测给定的媒体查询是否匹配
export function useMediaQuery(query: string): boolean {
  // 状态变量，用于存储媒体查询的匹配结果
  const [matches, setMatches] = useState(false);

  // 使用 useEffect 来添加和清理事件监听器
  useEffect(() => {
    // 创建一个 MediaQueryList 对象
    const media = window.matchMedia(query);

    // 如果当前的匹配状态与状态变量不一致，则更新状态
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    // 定义一个监听器，当媒体查询的匹配状态改变时更新状态
    const listener = () => setMatches(media.matches);

    // 添加监听器到 MediaQueryList
    media.addListener(listener);

    // 清理函数：在组件卸载时移除监听器
    return () => media.removeListener(listener);
  }, [matches, query]); // 依赖项：matches 和 query

  // 返回当前的匹配状态
  return matches;
}
