import Weather from "./components/Weather"
import Blog from "./components/Blog"
import {app} from "./../lib/firebase"

export default function Home() {
  return (
    <>
    <div>
      <p>今日の天気</p>
      <Weather />
    </div>
    <br />
    <div>
      <p>最近の記事</p>
      <Blog />
    </div>
    <div>
          <a
            href ="/new" 
            target="_blank"
            rel="noopener noreferrer"
          >
            記事作成画面
          </a>
        </div>
    </>
  );
}
