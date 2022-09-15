import { Comments } from "../Comments/Comments"
import { Search } from "../Search/Search"

export const Home = () => {
    return(
        <section className="Home">
            <Search />
            <Comments hello="heinz" />
        </section>
    )
}