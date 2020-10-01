import Link from "next/link";

export function HomePage(){
    return <div>
        <Link href="/people">
            <a>People</a>
        </Link>
    </div>
}