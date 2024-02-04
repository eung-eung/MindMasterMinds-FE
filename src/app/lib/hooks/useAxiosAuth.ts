'use client'
import { useSession } from "next-auth/react"
import { useEffect } from "react"
import { axiosAuth } from "../axious"

const useAxiosAuth = () => {
    const { data: session } = useSession()
    useEffect(() => {
        const requestIntercept = axiosAuth.interceptors.request.use((config) => {
            console.log('content type: ', config.headers["Content-Type"]);
            if (!config.headers["Content-Type"]) {
                config.headers["Content-Type"] = 'application/json'
            }

            if (!config.headers["Authorization"]) {
                config.headers["Authorization"] = `Bearer ${session?.user.accessToken}`
            }
            console.log(config.headers["Authorization"]);
            return config
        })

        return () => {
            axiosAuth.interceptors.request.eject(requestIntercept)
        }
    }, [session])

    return axiosAuth
}

export default useAxiosAuth