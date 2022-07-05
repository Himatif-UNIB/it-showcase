import "../styles/globals.css"
import { QueryClient, QueryClientProvider } from "react-query"
import { ReactQueryDevtools } from "react-query/devtools"
import FilterProvider from "../helpers/filter/FilterProvider"

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {
    return (
        <QueryClientProvider client={queryClient}>
            <FilterProvider>
                <Component {...pageProps} />
            </FilterProvider>
            <ReactQueryDevtools />
        </QueryClientProvider>
    )
}

export default MyApp
