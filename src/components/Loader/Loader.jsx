import "./loader.css";
import { MrMiyagi } from '@uiball/loaders'

export default function Loader() {
    return (
        <div className="loader">
        <MrMiyagi
            size={150}
            lineWeight={3.5}
            speed={1}
            color="black"
        />
        </div>
    )
}