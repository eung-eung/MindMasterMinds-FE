import { useState, useEffect } from "react";
import { PostExplore } from "@/app/types/Post-Explore";
import getPostsPage from "../getPosts";
import { useSession } from "next-auth/react";
export default function usePosts(pageNum = 1) {
    const [results, setResults] = useState<any>([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [error, setError] = useState({})
    const [hasNextPage, setHasNextPage] = useState(false)
    const { data: session } = useSession()

    useEffect(() => {
        setIsLoading(true)
        setIsError(false)
        setError({})


        const controller = new AbortController()
        const { signal } = controller

        getPostsPage(pageNum, signal, session?.user.accessToken)
            .then((data: PostExplore[]) => {
                if (pageNum == 1) setResults((prev: any[]) => [...data])
                else {
                    setResults((prev: any[]) => [...prev, ...data])
                }
                setHasNextPage(Boolean(data.length))
                setIsLoading(false)
            })
            .catch(e => {
                setIsLoading(false)
                if (signal.aborted) return
                setIsError(true)
                setError({ message: e.Message })
            })
        return () => {
            controller.abort()
        }

    }, [pageNum])
    return { results, isLoading, isError, error, hasNextPage }
}
