import { Link } from "react-router-dom"

export const NotFound = () => {
  return (
    <div className="h-80 flex justify-center items-center">
      <div className="space-y-3">
        <div className="text-lg text-zinc-700 text-center">
          ページが見つかりません
        </div>
        <div className="text-base text-fourth text-center">
          <Link className="text-zinc-700 underline" to="/">
            Homeに戻る
          </Link>
        </div>
      </div>
    </div>
  )
}
